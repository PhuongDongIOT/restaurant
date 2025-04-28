package tts_test

import (
	"net/http/httptest"
	"testing"

	"ai-service/internal/tts"
)

func TestStreamTTS_MissingText(t *testing.T) {
	service := tts.NewTTSService()

	// Giả lập response writer
	rec := httptest.NewRecorder()

	// Test truyền empty text
	err := service.StreamTTS(rec, "")

	if err == nil {
		t.Errorf("Expected error when text is empty, got nil")
	}
}

func TestStreamTTS_Success(t *testing.T) {
	// Đây là test giả lập.
	// Nếu muốn test thật với OpenAI API thì cần mock response OpenAI.
	// Để đơn giản mình có thể thêm interface cho HTTPClient (advanced).
	t.Skip("Integration test needs real OpenAI key or mock")
}
