package handler

import (
	services "main-service/pkg/usecase/interface"
	"main-service/pkg/utils/models"
	"main-service/pkg/utils/response"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type TagHandler struct {
	tagUseCase services.TagUseCase
}

func NewTagHandler(usecase services.TagUseCase) *TagHandler {
	return &TagHandler{
		tagUseCase: usecase,
	}
}

// @Summary		Add Tag
// @Description	Admin can add new tag
// @Tags			Admin
// @Accept			multipart/form-data
// @Produce		    json
// @Param			name	body	domain.Tag	true	"name"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/tags [post]
func (h *TagHandler) AddTag(c *gin.Context) {

	var tag models.Tag

	Name := c.Request.FormValue("name")

	if Name == "" {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Tag name is required", nil, nil)
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	tag.Name = Name

	newTag, err := h.tagUseCase.AddTag(tag)
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Could not add the tag", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully added tag", nil, newTag)
	c.JSON(http.StatusOK, successRes)
}

// @Summary		Get All Tags
// @Description	Get a list of all tags
// @Tags			Admin
// @Produce		json
// @Security		Bearer
// @Success		200	{object}	response.Response{data=[]models.Tag}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/tags [get]
func (h *TagHandler) GetTags(c *gin.Context) {
	tags, err := h.tagUseCase.FindAllTags()
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Could not fetch tags", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully fetched tags", tags, nil)
	c.JSON(http.StatusOK, successRes)
}

// @Summary		Get Tag by ID
// @Description	Get a tag by ID
// @Tags			Admin
// @Produce		json
// @Param			id	path		int	true	"Tag ID"
// @Security		Bearer
// @Success		200	{object}	response.Response{data=models.Tag}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/tags/{id} [get]
func (h *TagHandler) GetTagByID(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Invalid tag ID", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	tag, err := h.tagUseCase.FindTagByID(uint(id))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Could not find tag", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully fetched tag", tag, nil)
	c.JSON(http.StatusOK, successRes)
}

// @Summary		Delete Tag
// @Description	Delete a tag by ID
// @Tags			Admin
// @Param			id	path		int	true	"Tag ID"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/tags/{id} [delete]
func (h *TagHandler) DeleteTag(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Invalid tag ID", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	err = h.tagUseCase.DeleteTag(uint(id))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Could not delete tag", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully deleted tag", nil, nil)
	c.JSON(http.StatusOK, successRes)
}
