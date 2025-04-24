package interfaces

import "main-service/pkg/utils/models"

type StationRepository interface {
	AddStation(station models.Station) error
	ChangeUserStation(id int, userID int) error
}
