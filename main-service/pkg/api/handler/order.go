package handler

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"log"
	services "main-service/pkg/usecase/interface"
	"main-service/pkg/utils/models"
	"main-service/pkg/utils/response"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type OrderHandler struct {
	orderUseCase services.OrderUseCase
}

func NewOrderHandler(useCase services.OrderUseCase) *OrderHandler {
	return &OrderHandler{
		orderUseCase: useCase,
	}
}

// @Summary		Get Orders
// @Description	user can view the details of the orders
// @Tags			User
// @Accept			json
// @Produce		    json
// @Param			id	query	string	true	"id"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/users/profile/orders [get]
func (i *OrderHandler) GetOrders(c *gin.Context) {
	idString := c.Query("id")
	id, err := strconv.Atoi(idString)

	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "check your id again", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	orders, err := i.orderUseCase.GetOrders(id)
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "could not retrieve records", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	successRes := response.ClientResponse(http.StatusOK, "Successfully got all records", orders, nil)
	c.JSON(http.StatusOK, successRes)
}

// @Summary		Order Now
// @Description	user can order the items that currently in cart
// @Tags			User
// @Accept			json
// @Produce		    json
// @Param			order body	models.Order  true	"id"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/users/check-out/order [post]
func (i *OrderHandler) OrderItemsFromCart(c *gin.Context) {

	var order models.Order
	if err := c.BindJSON(&order); err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "fields provided are in wrong format", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	if err := i.orderUseCase.OrderItemsFromCart(order.UserID, order.AddressID, order.PaymentMethodID, order.CouponID); err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "could not make the order", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully made the order", nil, nil)
	c.JSON(http.StatusOK, successRes)

	// **Send message to WebSocket server**
	go i.sendOrderConfirmation(order) // Send in a goroutine to avoid blocking
}

func (i *OrderHandler) sendOrderConfirmation(order models.Order) {
	// Construct the message payload
	message := map[string]interface{}{
		"userId":          order.UserID,
		"addressId":       order.AddressID,
		"paymentMethodId": order.PaymentMethodID,
		"couponId":        order.CouponID,
		"orderStatus":     "Order Placed",      // Or whatever status you want to send
		"message":         "New order placed!", // A general message
	}

	messageBytes, err := json.Marshal(message)
	if err != nil {
		log.Println("Error marshalling message:", err)
		return // Handle the error appropriately (log, etc.)
	}

	// Prepare the POST request
	url := "http://localhost:3020/send-message/order" // Replace with your WebSocket server URL
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(messageBytes))
	if err != nil {
		log.Println("Error creating request:", err)
		return // Handle the error
	}
	req.Header.Set("Content-Type", "application/json")

	// Send the request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Println("Error sending request to WebSocket server:", err)
		return // Handle the error
	}
	defer resp.Body.Close()

	// Handle the response (optional, but recommended)
	if resp.StatusCode != http.StatusOK {
		bodyBytes, _ := ioutil.ReadAll(resp.Body) // Read response body (for debugging)
		log.Printf("WebSocket server returned status: %d, body: %s\n", resp.StatusCode, string(bodyBytes))
		// Consider more robust error handling here based on your needs
	} else {
		log.Println("Successfully sent order confirmation to WebSocket server")
	}
}

// @Summary		Order Cancel
// @Description	user can cancel the orders
// @Tags			User
// @Accept			json
// @Produce		    json
// @Param			id  query  string  true	"id"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/users/profile/orders [delete]
func (i *OrderHandler) CancelOrder(c *gin.Context) {

	id, err := strconv.Atoi(c.Query("id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "coonversion to integer not possible", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	if err := i.orderUseCase.CancelOrder(id); err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "fields provided are in wrong format", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully canceled the order", nil, nil)
	c.JSON(http.StatusOK, successRes)

}

// @Summary		Update Order Status
// @Description	Admin can change the status of the order
// @Tags			Admin
// @Accept			json
// @Produce		    json
// @Param			id  query  string  true	"id"
// @Param			status  query  string  true	"status"
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/orders/edit/status [put]
func (i *OrderHandler) EditOrderStatus(c *gin.Context) {

	var status models.EditOrderStatus
	err := c.BindJSON(&status)
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "conversion to integer not possible", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	if err := i.orderUseCase.EditOrderStatus(status.Status, status.OrderID); err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "fields provided are in wrong format", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Successfully edited the order status", nil, nil)
	c.JSON(http.StatusOK, successRes)

}

// @Summary		Admin Orders
// @Description	Admin can view the orders according to status
// @Tags			Admin
// @Accept			json
// @Produce		    json
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/admin/orders [get]
func (i *OrderHandler) AdminOrders(c *gin.Context) {

	orders, err := i.orderUseCase.AdminOrders()
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "could not retrieve records", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	successRes := response.ClientResponse(http.StatusOK, "Successfully got all records", orders, nil)
	c.JSON(http.StatusOK, successRes)
}

// @Summary		Return Order
// @Description	user can return the ordered products which is already delivered and then get the amount fot that particular purchase back in their wallet
// @Tags			User
// @Accept			json
// @Produce		    json
// @Security		Bearer
// @Success		200	{object}	response.Response{}
// @Failure		500	{object}	response.Response{}
// @Router			/users/profile/orders/return [put]
func (i *OrderHandler) ReturnOrder(c *gin.Context) {

	id, err := strconv.Atoi(c.Query("id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "conversion to integer not possible", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	if err := i.orderUseCase.ReturnOrder(id); err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "fields provided are in wrong format", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "Return success.The amount will be Credited your wallet", nil, nil)
	c.JSON(http.StatusOK, successRes)

}

func (i *OrderHandler) MakePaymentStatusAsPaid(c *gin.Context) {

	id, err := strconv.Atoi(c.Query("id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "conversion to integer not possible", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	if err := i.orderUseCase.MakePaymentStatusAsPaid(id); err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "fields provided are in wrong format", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "successfully updated as paid", nil, nil)
	c.JSON(http.StatusOK, successRes)

}

func (i *OrderHandler) GetIndividualOrderDetails(c *gin.Context) {

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "error in getting parameter", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}
	details, err := i.orderUseCase.GetIndividualOrderDetails(id)
	if err != nil {
		errorRes := response.ClientResponse(http.StatusBadRequest, "could not fetch the details", nil, err.Error())
		c.JSON(http.StatusBadRequest, errorRes)
		return
	}

	successRes := response.ClientResponse(http.StatusOK, "successfully fetched order details", details, nil)
	c.JSON(http.StatusOK, successRes)

}
