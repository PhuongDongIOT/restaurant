package main

import (
	"log"

	"main-service/cmd/api/docs"
	config "main-service/pkg/config"
	di "main-service/pkg/di"

	"github.com/joho/godotenv"
)

// @title API with Bearer Authentication
// @version 1.0
// @description API that requires Bearer token authentication
// @contact.name API Support
// @SecurityDefinition BearerAuth
// @TokenUrl /auth/token

// @securityDefinitions.Bearer		type apiKey
// @securityDefinitions.Bearer		name Authorization
// @securityDefinitions.Bearer		in header
// @securityDefinitions.BasicAuth	type basic
// @securityDefinitions.apikey Bearer
// @in header
// @name Authorization

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading the env file")
	}

	config, configErr := config.LoadConfig()
	if configErr != nil {
		log.Fatal("cannot load config: ", configErr)
	}

	// // swagger 2.0 Meta Information
	docs.SwaggerInfo.Title = "backend"
	docs.SwaggerInfo.Description = "Here passion meets the fashion,This is an online store for purchasing high quality jerseys of your favorite clubs.."
	docs.SwaggerInfo.Version = "1.0"
	docs.SwaggerInfo.Host = config.BASE_URL
	docs.SwaggerInfo.BasePath = ""
	docs.SwaggerInfo.Schemes = []string{"http"}

	server, diErr := di.InitializeAPI(config)
	if diErr != nil {
		log.Fatal("cannot start server: ", diErr)
	} else {
		server.Start()
	}
}
