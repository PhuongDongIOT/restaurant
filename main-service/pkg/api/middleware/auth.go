package middleware

import (
	"github.com/gin-gonic/gin"
)

func AdminAuthMiddleware(c *gin.Context) {

	// accessToken := c.Request.Header.Get("Authorization")

	// accessToken = strings.TrimPrefix(accessToken, "Bearer ")

	// _, err := jwt.Parse(accessToken, func(token *jwt.Token) (interface{}, error) {
	// 	return []byte("accesssecret"), nil
	// })
	// if err != nil {
	// 	// The access token is invalid.
	// 	fmt.Println("error catches here")
	// 	c.AbortWithStatus(401)
	// 	return
	// }

	c.Next()
}
