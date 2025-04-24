package interfaces

import (
	"main-service/pkg/utils/models"
)

type TagUseCase interface {
	AddTag(tag models.Tag) (models.Tag, error)
	UpdateByID(id uint, data models.Tag) error
	DeleteTag(id uint) error
	FindAllTags() ([]models.Tag, error)
	FindTagByID(id uint) (*models.Tag, error)
	FindTagByName(name string) (*models.Tag, error)
}
