package interfaces

import (
	"backend/pkg/utils/models"
)

type StationUseCase interface {
	AddStation(station models.Station) error
	ChangeUserStation(id int, userID int) error
}
