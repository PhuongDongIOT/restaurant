package interfaces

import "backend/pkg/utils/models"

type OtpUseCase interface {
	VerifyOTP(code models.VerifyData) (models.TokenUsers, error)
	SendOTP(phone string) error
}
