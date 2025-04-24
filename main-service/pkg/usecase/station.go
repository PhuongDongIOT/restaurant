package usecase

import (
	interfaces "main-service/pkg/repository/interface"
	"main-service/pkg/utils/models"
)

type stationUseCase struct {
	repository interfaces.StationRepository
}

func NewStationUseCase(repo interfaces.StationRepository) *stationUseCase {
	return &stationUseCase{
		repository: repo,
	}
}

func (sta *stationUseCase) AddStation(station models.Station) error {

	err := sta.repository.AddStation(station)
	if err != nil {
		return err
	}

	return nil
}

func (sta *stationUseCase) ChangeUserStation(id int, userID int) error {

	err := sta.repository.ChangeUserStation(id, userID)
	if err != nil {
		return err
	}

	return nil
}
