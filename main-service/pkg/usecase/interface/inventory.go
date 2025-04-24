package interfaces

import (
	"main-service/pkg/utils/models"
)

type InventoryUseCase interface {
	AddInventory(inventory models.AddInventories) (models.InventoryResponse, error)
	UpdateInventory(ProductID int, Stock int) (models.InventoryResponse, error)
	DeleteInventory(id string) error
	IndividualProducts(sku string) (models.Inventories, error)

	ShowIndividualProducts(sku string) (models.Inventories, error)
	ListProductsForUser(page, userID int) ([]models.Inventories, error)
	ListProductsForAdmin(page int) ([]models.Inventories, error)

	SearchProducts(key string) ([]models.Inventories, error)

	UpdateProductImage(id int, file string) error
	EditInventoryDetails(int, models.EditInventoryDetails) error
}
