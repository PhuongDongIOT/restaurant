BINARY_NAME=resend-email-service

build:
	go build -o ./bin/server ./cmd/server

run:
	go run ./cmd/server

proto:
	protoc --go_out=. --go-grpc_out=. proto/*.proto

docker-build:
	docker build -t ${BINARY_NAME}:latest .

docker-run:
	docker run -e RESEND_API_KEY=your_api_key -p 50051:50051 ${BINARY_NAME}:latest

clean:
	rm -rf ./bin
