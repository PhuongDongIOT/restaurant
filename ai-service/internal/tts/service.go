package tts

import (
	"ai-service/pkg/tts"
	"net/http"
)

// TTSService định nghĩa interface
type TTSService interface {
	StreamTTS(w http.ResponseWriter, text string) error
}

type ttsService struct{}

// NewTTSService tạo instance mới
func NewTTSService() TTSService {
	return &ttsService{}
}

// StreamTTS thực thi logic gọi OpenAI rồi stream về client
func (s *ttsService) StreamTTS(w http.ResponseWriter, text string) error {
	resp, err := tts.RequestSpeech(text)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	w.Header().Set("Content-Type", "audio/mpeg")
	w.WriteHeader(http.StatusOK)

	buf := make([]byte, 1024)
	for {
		n, err := resp.Body.Read(buf)
		if n > 0 {
			w.Write(buf[:n])
			w.(http.Flusher).Flush()
		}
		if err != nil {
			break
		}
	}

	return nil
}
