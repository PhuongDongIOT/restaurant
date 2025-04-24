package interfaces

import (
	"main-service/pkg/domain"
	"main-service/pkg/utils/models"
)

type CouponUsecase interface {
	AddCoupon(coupon models.Coupons) error
	MakeCouponInvalid(id int) error
	ReActivateCoupon(id int) error
	GetAllCoupons() ([]domain.Coupons, error)
}
