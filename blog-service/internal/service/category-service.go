package service

import (
	"blog-service/internal/dto"
	"blog-service/internal/model"
	"blog-service/internal/repository"

	"github.com/mashingan/smapping"
	"gorm.io/gorm"
)

type CategoryService interface {
	All() []model.Category
	Insert(categoryDto dto.Category) model.Category
	Update(categoryId uint64, categoryDto dto.Category) (model.Category, error)
	DeleteById(categoryId uint64) *gorm.DB
}

type categoryService struct {
	categoryRepo repository.CategoryRepo
}

func NewCategoryService(categoryRepo repository.CategoryRepo) *categoryService {
	return &categoryService{categoryRepo: categoryRepo}
}

func (service *categoryService) All() []model.Category {
	return service.categoryRepo.AllCategories()
}

func (service *categoryService) Insert(
	categoryDto dto.Category,
) model.Category {
	categoryModel := model.Category{}
	err := smapping.FillStruct(&categoryModel, smapping.MapFields(&categoryDto))
	if err != nil {
		panic(err)
	}
	return service.categoryRepo.Insert(categoryModel)
}

func (service *categoryService) Update(
	categoryId uint64, categoryDto dto.Category,
) (model.Category, error) {
	category, err := service.categoryRepo.GetById(categoryId)
	if err != nil {
		return category, err
	}
	fillErr := smapping.FillStruct(&category, smapping.MapFields(&categoryDto))
	if fillErr != nil {
		panic(fillErr)
	}
	service.categoryRepo.Save(&category)
	return category, nil
}

func (service *categoryService) DeleteById(categoryId uint64) *gorm.DB {
	return service.categoryRepo.DeleteById(categoryId)
}
