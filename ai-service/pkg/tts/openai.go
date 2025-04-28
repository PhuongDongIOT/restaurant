package tts

import (
	"bytes"
	"encoding/json"
	"net/http"
	"os"
)

var openaiAPIKey = os.Getenv("OPENAI_API_KEY") // Đọc từ biến môi trường

func RequestSpeech(text string) (*http.Response, error) {
	openaiURL := "https://api.openai.com/v1/audio/speech"
	payload := map[string]interface{}{
		"model":           "tts-1",
		"input":           text,
		"voice":           "nova",
		"response_format": "mp3",
		"stream":          true,
	}
	body, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", openaiURL, bytes.NewBuffer(body))
	req.Header.Set("Authorization", "Bearer "+openaiAPIKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	return client.Do(req)
}
