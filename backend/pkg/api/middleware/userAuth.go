package middleware

import (
	"github.com/gin-gonic/gin"
)

func UserAuthMiddleware(c *gin.Context) {
	// tokenString := c.GetHeader("Authorization")
	// if tokenString == "" {
	// 	c.Next()
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Missing authorization token"})
	// 	c.Abort()
	// 	return
	// }
	// tokenString = strings.TrimPrefix(tokenString, "Bearer ")

	// token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {

	// 	return []byte("comebuyjersey"), nil
	// })

	// if err != nil || !token.Valid {
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid authorization token"})
	// 	c.Abort()
	// 	return
	// }

	// claims, ok := token.Claims.(jwt.MapClaims)
	// if !ok || !token.Valid {
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid authorization token"})
	// 	c.Abort()
	// 	return
	// }

	// fmt.Println("claims", claims)

	// role, ok := claims["role"].(string)
	// if !ok || role != "client" {
	// 	c.JSON(http.StatusForbidden, gin.H{"error": "Unauthorized access"})
	// 	c.Abort()
	// 	return
	// }

	// id, ok := claims["id"].(float64)
	// if !ok || id == 0 {
	// 	c.JSON(http.StatusForbidden, gin.H{"error": "error in retrieving id"})
	// 	c.Abort()
	// 	return
	// }

	// c.Set("role", role)
	c.Set("id", int(0))

	c.Next()
}
