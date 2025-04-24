package interfaces

import (
	"main-service/pkg/domain"
	"main-service/pkg/utils/models"
)

type OfferUseCase interface {
	AddNewOffer(model models.OfferMaking) error
	MakeOfferExpire(id int) error
	GetOffers() ([]domain.Offer, error)
}
