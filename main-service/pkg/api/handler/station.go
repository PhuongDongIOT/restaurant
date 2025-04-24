package handler

import (
	services "main-service/pkg/usecase/interface"
	"main-service/pkg/utils/models"
	"main-service/pkg/utils/response"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type StationHandler struct {
	stationUseCase services.StationUseCase
}

func NewStationHandler(usecase services.StationUseCase) *StationHandler {
	return &StationHandler{
		stationUseCase: usecase,
	}
}

// @Summary		Add Station
// @Description	Admin can add new  station
// @Tags			Admin
// @Accept			multipart/form-data
// @Produce		    json
// @Tags			Admin
// @Accept			json
// @Produce		    json
// @Param			name	body	domain.Station	true	"name"
// @Param			description	body	domain.Station	true	"description"
// @Param			user_id	body	domain.Station	true	"user_id"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/stations [post]
func (i *StationHandler) AddStation(c *gin.Context) {

	var station models.Station
	Name := c.Request.FormValue("name")
	Description := c.Request.FormValue("description")
	UserID, err := strconv.Atoi(c.Request.FormValue("user_id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "form file error", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	station.Name = Name
	station.UserID = UserID
	station.Description = Description

	err = i.stationUseCase.AddStation(station)
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Could not add the Staion", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully added Staion", nil, nil)
	c.JSON(http.StatusOK, successRes)

}

// @Summary		Delete Category
// @Description	Admin can delete a category
// @Tags			Admin
// @Accept			json
// @Produce		    json
// @Param			id	query	string	true	"id"
// @Param			user_id	body	domain.Station	true	"user_id"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/stations/changeUser [put]
func (i *StationHandler) ChangeUserStation(c *gin.Context) {

	ID, err := strconv.Atoi(c.Query("id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "form file error", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	UserID, err := strconv.Atoi(c.Request.FormValue("user_id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "form file error", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	err = i.stationUseCase.ChangeUserStation(ID, UserID)
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "Could not add the Staion", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully added Staion", nil, nil)
	c.JSON(http.StatusOK, successRes)

}
