package route

import (
	"blog-service/pkg/logger"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func RootRoute(db *gorm.DB, router *gin.Engine, logger *logger.Logger) {

	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	})

	router.Static("/media", "./media")
	apiRouter := router.Group("/api/v1")
	postRouter := apiRouter.Group("/posts")
	PostRoute(db, postRouter, logger)
	commentRouter := apiRouter.Group("/posts/:postId/comments")
	CommentRoute(db, commentRouter, logger)
	categoryRouter := apiRouter.Group("/categories")
	CategoryRoute(db, categoryRouter, logger)
	authRouter := apiRouter.Group("/auth")
	AuthRoute(db, authRouter, logger)
}
