package interfaces

import (
	"backend/pkg/domain"
	"backend/pkg/utils/models"
)

type CouponRepository interface {
	AddCoupon(models.Coupons) error
	MakeCouponInvalid(id int) error
	ReActivateCoupon(id int) error
	FindCouponDetails(couponID int) (domain.Coupons, error)
	GetAllCoupons() ([]domain.Coupons, error)
}
