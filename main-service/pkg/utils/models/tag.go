package models

type Tag struct {
	ID    uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Name  string `json:"name" gorm:"size:100;not null;unique"`
	Color string `json:"color" gorm:"size:20;default:'#f3f4f6'"`
}

type ProductTag struct {
	ProductID uint `json:"product_id" gorm:"primaryKey"`
	TagID     uint `json:"tag_id" gorm:"primaryKey"`
}
