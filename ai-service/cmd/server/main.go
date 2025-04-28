package main

import (
	"log"
	"net/http"

	"ai-service/pkg/middleware"
	"ai-service/pkg/tts"
)

func main() {
	mux := http.NewServeMux()
	handler := middleware.LoggerMiddleware(middleware.CorsMiddleware(tts.Handler))

	mux.HandleFunc("/api/tts", handler)

	server := &http.Server{
		Addr:    ":3030",
		Handler: mux,
	}

	log.Println("Starting server on :3030...")
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
