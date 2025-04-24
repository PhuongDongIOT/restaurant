package usecase

import (
	interfaces "main-service/pkg/repository/interface"
	"main-service/pkg/utils/models"
)

type TagUseCase struct {
	tagRepo interfaces.TagRepository
}

func NewTagUseCase(repo interfaces.TagRepository) *TagUseCase {
	return &TagUseCase{
		tagRepo: repo,
	}
}

func (u *TagUseCase) AddTag(tag models.Tag) (models.Tag, error) {
	newTag, err := u.tagRepo.AddTag(tag)
	if err != nil {
		return models.Tag{}, err
	}
	return newTag, nil
}

func (u *TagUseCase) UpdateByID(id uint, data models.Tag) error {
	err := u.tagRepo.UpdateByID(id, data)
	if err != nil {
		return err
	}
	return nil
}

func (u *TagUseCase) DeleteTag(id uint) error {
	err := u.tagRepo.Delete(id)
	if err != nil {
		return err
	}
	return nil
}

func (u *TagUseCase) FindAllTags() ([]models.Tag, error) {
	tags, err := u.tagRepo.FindAll()
	if err != nil {
		return nil, err
	}
	return tags, nil
}

func (u *TagUseCase) FindTagByID(id uint) (*models.Tag, error) {
	tag, err := u.tagRepo.FindByID(id)
	if err != nil {
		return nil, err
	}
	return tag, nil
}

func (u *TagUseCase) FindTagByName(name string) (*models.Tag, error) {
	tag, err := u.tagRepo.FindByName(name)
	if err != nil {
		return nil, err
	}
	return tag, nil
}
