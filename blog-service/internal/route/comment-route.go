package route

import (
	"blog-service/internal/controller"
	"blog-service/internal/middleware"
	"blog-service/internal/repository"
	"blog-service/internal/service"
	"blog-service/pkg/logger"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CommentRoute(
	db *gorm.DB, CommentRouter *gin.RouterGroup, logger *logger.Logger,
) {
	var (
		commentRepository repository.CommentRepo = repository.NewCommentRepo(db)
		commentService    service.CommentService = service.
					NewCommentService(commentRepository)
		commentController controller.CommentController = controller.
					NewCommentController(commentService, logger)
	)
	CommentRouter.GET("", commentController.All)
	CommentRouter.POST("", middleware.AuthorizeJWT(), commentController.Insert)
}
