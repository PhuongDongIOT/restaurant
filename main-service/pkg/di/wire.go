//go:build wireinject
// +build wireinject

package di

import (
	http "main-service/pkg/api"
	handler "main-service/pkg/api/handler"
	config "main-service/pkg/config"
	db "main-service/pkg/db"
	repository "main-service/pkg/repository"
	usecase "main-service/pkg/usecase"

	"github.com/google/wire"
)

func InitializeAPI(cfg config.Config) (*http.ServerHTTP, error) {
	wire.Build(db.ConnectDatabase, repository.NewUserRepository, usecase.NewUserUseCase, handler.NewUserHandler, http.NewServerHTTP)

	return &http.ServerHTTP{}, nil
}
