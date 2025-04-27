package route

import (
	"blog-service/internal/controller"
	"blog-service/internal/repository"
	"blog-service/internal/service"
	"blog-service/pkg/logger"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func AuthRoute(db *gorm.DB, authRouter *gin.RouterGroup, logger *logger.Logger) {
	var (
		jwtService     service.JwtService  = service.NewJwtService()
		authRepository repository.AuthRepo = repository.NewAuthRepo(db)
		authService    service.AuthService = service.
				NewAuthService(authRepository)
		authController controller.AuthController = controller.
				NewAuthController(authService, jwtService, logger)
	)
	authRouter.POST("/login", authController.Login)
	authRouter.POST("/signup", authController.Register)
	authRouter.POST("/token/verify", authController.VerifyToken)
	authRouter.POST("/token/refresh", authController.RefreshToken)
}
