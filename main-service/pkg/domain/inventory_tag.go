package domain

import "gorm.io/gorm"

type InventoryTag struct {
	gorm.Model
	InventoryID uint `json:"inventory_id" gorm:"not null;index"`
	TagID       uint `json:"tag_id" gorm:"not null;index"`

	Inventory Inventories `json:"inventory" gorm:"foreignkey:InventoryID;constraint:OnDelete:CASCADE"`
	Tag       Tag         `json:"tag" gorm:"foreignkey:TagID;constraint:OnDelete:CASCADE"`
}
