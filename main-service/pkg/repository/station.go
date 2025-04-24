package repository

import (
	"main-service/pkg/utils/models"

	"gorm.io/gorm"
)

type stationRepository struct {
	DB *gorm.DB
}

func NewStationRepository(db *gorm.DB) *stationRepository {
	return &stationRepository{
		DB: db,
	}
}

func (sta *stationRepository) AddStation(station models.Station) error {
	if err := sta.DB.Exec("INSERT INTO station(name,user_id,description) values($1,$2,$3)", station.Name, station.UserID, station.Description).Error; err != nil {
		return err
	}

	return nil
}

func (sta *stationRepository) ChangeUserStation(id int, userID int) error {
	if err := sta.DB.Exec("UPDATE station SET user_id=$1 where id=$2", id, userID).Error; err != nil {
		return err
	}

	return nil
}
