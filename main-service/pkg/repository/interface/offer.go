package interfaces

import (
	"main-service/pkg/domain"
	"main-service/pkg/utils/models"
)

type OfferRepository interface {
	AddNewOffer(model models.OfferMaking) error
	MakeOfferExpire(id int) error
	FindDiscountPercentage(int) (int, error)
	GetOffers() ([]domain.Offer, error)
}
