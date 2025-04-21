package middleware

import (
	"github.com/gin-gonic/gin"
)

func AuthorizeJWT() gin.HandlerFunc {
	return func(context *gin.Context) {
		// tokenString := utils.GetTokenString(context)
		// if tokenString == "" {
		// 	context.AbortWithStatusJSON(
		// 		http.StatusUnauthorized, utils.GetErrorResponse("No token found"),
		// 	)
		// 	return
		// }
		// token, err := utils.ValidateToken(tokenString)
		// if token == nil || !token.Valid {
		// 	context.AbortWithStatusJSON(
		// 		http.StatusUnauthorized, utils.GetErrorResponse(err.Error()),
		// 	)
		// 	return
		// }
	}
}
