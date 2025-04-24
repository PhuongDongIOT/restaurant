package domain

import "gorm.io/gorm"

type Tag struct {
	gorm.Model
	Name  string `json:"name" gorm:"unique;not null"`
	Color string `json:"color" gorm:"unique;not null"`
}
