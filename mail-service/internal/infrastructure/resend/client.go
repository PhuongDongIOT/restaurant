package resend

import (
	"context"
	"mail-service/internal/domain"
	"os"

	"github.com/resend/resend-go/v2"
)

type ResendClient struct {
	client *resend.Client
	from   string
}

func NewResendClient() *ResendClient {
	apiKey := os.Getenv("RESEND_API_KEY")
	client := resend.NewClient(apiKey)
	return &ResendClient{
		client: client,
		from:   "Acme <onboarding@resend.dev>",
	}
}

func (r *ResendClient) Send(ctx context.Context, email domain.Email) (string, error) {
	req := &resend.SendEmailRequest{
		From:    r.from,
		To:      []string{email.To},
		Html:    email.Html,
		Subject: email.Subject,
	}

	sent, err := r.client.Emails.Send(req)
	if err != nil {
		return "", err
	}
	return sent.Id, nil
}
