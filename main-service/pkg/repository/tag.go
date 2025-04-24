package repository

import (
	"main-service/pkg/utils/models"

	"gorm.io/gorm"
)

type tagRepository struct {
	DB *gorm.DB
}

func NewTagRepository(db *gorm.DB) *tagRepository {
	return &tagRepository{
		DB: db,
	}
}

func (r *tagRepository) FindAll() ([]models.Tag, error) {
	var tags []models.Tag
	err := r.DB.Raw("SELECT id, name, color FROM tags").Scan(&tags).Error
	return tags, err
}

func (r *tagRepository) FindByID(id uint) (*models.Tag, error) {
	var tag models.Tag
	err := r.DB.Raw("SELECT id, name, color FROM tags WHERE id = ?", id).Scan(&tag).Error
	if err != nil {
		return nil, err
	}
	return &tag, nil
}

func (r *tagRepository) FindByName(name string) (*models.Tag, error) {
	var tag models.Tag
	err := r.DB.Raw("SELECT id, name, color FROM tags WHERE name = ?", name).Scan(&tag).Error
	if err != nil {
		return nil, err
	}
	return &tag, nil
}

func (r *tagRepository) AddTag(tag models.Tag) (models.Tag, error) {
	err := r.DB.Exec("INSERT INTO tags (name, color) VALUES (?, ?)", tag.Name, tag.Color).Error
	if err != nil {
		return models.Tag{}, err
	}

	var createdTag models.Tag
	err = r.DB.Raw("SELECT id, name, color FROM tags WHERE name = ?", tag.Name).Scan(&createdTag).Error
	return createdTag, err
}

func (r *tagRepository) UpdateByID(id uint, data models.Tag) error {

	return r.DB.Exec("UPDATE tags SET name = ?, color = ? WHERE id = ?", data.Name, data.Color, id).Error
}

func (r *tagRepository) Delete(id uint) error {
	return r.DB.Exec("DELETE FROM tags WHERE id = ?", id).Error
}
