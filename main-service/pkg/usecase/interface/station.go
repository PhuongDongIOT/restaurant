package interfaces

import (
	"main-service/pkg/utils/models"
)

type StationUseCase interface {
	AddStation(station models.Station) error
	ChangeUserStation(id int, userID int) error
}
