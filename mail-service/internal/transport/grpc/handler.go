package grpc

import (
	"context"
	"mail-service/internal/app"
	"mail-service/internal/domain"
	pb "mail-service/internal/transport/grpc/proto/emailpb"
)

type Handler struct {
	pb.UnimplementedEmailServiceServer
	service *app.EmailService
}

func NewHandler(service *app.EmailService) *Handler {
	return &Handler{service: service}
}

func (h *Handler) SendEmail(ctx context.Context, req *pb.SendEmailRequest) (*pb.SendEmailResponse, error) {
	email := domain.Email{
		To:      req.ReplyTo,
		Subject: req.Subject,
		Html:    req.Html,
	}
	id, err := h.service.SendEmail(ctx, email)
	if err != nil {
		return nil, err
	}
	return &pb.SendEmailResponse{Id: id}, nil
}
