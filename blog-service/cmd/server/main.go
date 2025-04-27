package main

import (
	"os"

	"blog-service/adapter"
	"blog-service/docs"
	"blog-service/internal/route"
	"blog-service/pkg/logger"

	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"gorm.io/gorm"
)

var db *gorm.DB = adapter.ConnectWithDB()

// @title           Gin Blog Api
// @version         1.0
// @description     A Blog API in Go using Gin framework.

// @contact.name   Abdur Rauf Raihan
// @contact.url    https://linkedin.com/abdurraufraihan
// @contact.email  abdurraufraihan@gmail.com

// @license.name  Apache 2.0
// @license.url   http://www.apache.org/licenses/LICENSE-2.0.html

// @host      localhost:3001
// @BasePath  /api/v1

func main() {
	defer adapter.CloseDbConnection(db)
	logger := logger.NewLogger()
	router := gin.Default()
	route.RootRoute(db, router, logger)

	docs.SwaggerInfo.BasePath = "/api/v1"
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "3001"
	}

	router.Run(":" + port)
}
