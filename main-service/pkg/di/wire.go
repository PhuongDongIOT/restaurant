//go:build wireinject
// +build wireinject

package di

import (
	http "backend/pkg/api"
	handler "backend/pkg/api/handler"
	config "backend/pkg/config"
	db "backend/pkg/db"
	repository "backend/pkg/repository"
	usecase "backend/pkg/usecase"

	"github.com/google/wire"
)

func InitializeAPI(cfg config.Config) (*http.ServerHTTP, error) {
	wire.Build(db.ConnectDatabase, repository.NewUserRepository, usecase.NewUserUseCase, handler.NewUserHandler, http.NewServerHTTP)

	return &http.ServerHTTP{}, nil
}
