package interfaces

import (
	"main-service/pkg/utils/models"
)

type TagRepository interface {
	FindAll() ([]models.Tag, error)
	FindByID(id uint) (*models.Tag, error)
	AddTag(tag models.Tag) (models.Tag, error)
	FindByName(name string) (*models.Tag, error)
	UpdateByID(id uint, data models.Tag) error
	Delete(id uint) error
}
