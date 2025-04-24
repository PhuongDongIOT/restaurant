package interfaces

import (
	"main-service/pkg/utils/models"
)

type InventoryRepository interface {
	AddInventory(inventory models.AddInventories) (models.InventoryResponse, error)
	CheckInventory(pid int) (bool, error)
	UpdateInventory(pid int, stock int) (models.InventoryResponse, error)
	DeleteInventory(id string) error
	IndividualProducts(id string) (models.Inventories, error)
	ShowIndividualProducts(id string) (models.Inventories, error)
	ListProducts(page int) ([]models.Inventories, error)
	ListProductsByCategory(id int) ([]models.Inventories, error)
	CheckStock(inventory_id int) (int, error)
	CheckPrice(inventory_id int) (float64, error)
	SearchProducts(key string) ([]models.Inventories, error)
	UpdateProductImage(id int, file string) error
	EditInventoryDetails(id int, model models.EditInventoryDetails) error
	// AddTagsToInventory(id int, tagNames []string) error
	// RemoveTagsFromInventory(id int, tagNames []string) error
	// GetTagsOfInventory(id int) ([]models.Tag, error)
}
