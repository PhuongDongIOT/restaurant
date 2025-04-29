package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/madeindra/golang-websocket/internal/websocket"
	"github.com/rs/cors" // Import the cors package
)

func main() {
	// Create a new router
	r := mux.NewRouter()

	r.HandleFunc("/socket", websocket.HandleWS)

	// Handle sending messages to a topic (POST requests)
	r.HandleFunc("/send-message/{topic}", websocket.HandleSendMessage).Methods(http.MethodPost)

	// **Configure CORS**
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Allow all origins (INSECURE! for development only)
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Origin", "Content-Type", "Accept"},
		AllowCredentials: true, // Allow cookies, if needed
	})

	// Wrap the router with the CORS handler
	handler := c.Handler(r)

	// Start the server
	log.Println("Server starting on :3020")
	if err := http.ListenAndServe(":3020", handler); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}
