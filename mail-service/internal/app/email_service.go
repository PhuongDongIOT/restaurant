package app

import (
	"context"
	"mail-service/internal/domain"
)

type EmailSender interface {
	Send(ctx context.Context, email domain.Email) (string, error)
}

type EmailService struct {
	sender EmailSender
}

func NewEmailService(sender EmailSender) *EmailService {
	return &EmailService{sender: sender}
}

func (s *EmailService) SendEmail(ctx context.Context, email domain.Email) (string, error) {
	return s.sender.Send(ctx, email)
}
