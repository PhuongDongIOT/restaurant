package main

import (
	"log"
	"mail-service/internal/app"
	"mail-service/internal/infrastructure/resend"
	grpcTransport "mail-service/internal/transport/grpc"
	pb "mail-service/internal/transport/grpc/proto/emailpb"
	"net"

	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", ":3011")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	resendClient := resend.NewResendClient()
	emailService := app.NewEmailService(resendClient)
	handler := grpcTransport.NewHandler(emailService)

	grpcServer := grpc.NewServer()
	pb.RegisterEmailServiceServer(grpcServer, handler)

	log.Println("gRPC server started on :3011")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
