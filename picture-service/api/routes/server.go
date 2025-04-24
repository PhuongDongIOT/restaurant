package routes

import (
	"net/http"

	"picture-service/photogram/api/resthandlers"
)

func NewServerRouteList(handlers resthandlers.ServerHandler) []*Route {
	return []*Route{
		{Path: "/healthcheck", Method: http.MethodGet, Handler: handlers.HealthCheck},
	}
}
