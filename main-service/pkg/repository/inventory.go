package repository

import (
	"errors"
	"main-service/pkg/utils/models"
	"strconv"

	"gorm.io/gorm"
)

type inventoryRepository struct {
	DB *gorm.DB
}

func NewInventoryRepository(DB *gorm.DB) *inventoryRepository {
	return &inventoryRepository{
		DB: DB,
	}
}

func (i *inventoryRepository) AddInventory(inventory models.AddInventories) (models.InventoryResponse, error) {

	query := `
    INSERT INTO inventories (category_id, product_name, size, stock, price, description, image)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `
	err := i.DB.Exec(query, inventory.CategoryID, inventory.ProductName, inventory.Size, inventory.Stock, inventory.Price, inventory.Description, inventory.Image).Error
	if err != nil {
		return models.InventoryResponse{}, err
	}

	var inventoryResponse models.InventoryResponse

	return inventoryResponse, nil

}

func (i *inventoryRepository) CheckInventory(pid int) (bool, error) {
	var k int
	err := i.DB.Raw("SELECT COUNT(*) FROM inventories WHERE id=?", pid).Scan(&k).Error
	if err != nil {
		return false, err
	}

	if k == 0 {
		return false, err
	}

	return true, err
}

func (i *inventoryRepository) UpdateInventory(pid int, stock int) (models.InventoryResponse, error) {

	// Check the database connection
	if i.DB == nil {
		return models.InventoryResponse{}, errors.New("database connection is nil")
	}

	// Update the
	if err := i.DB.Exec("UPDATE inventories SET stock = stock + $1 WHERE id= $2", stock, pid).Error; err != nil {
		return models.InventoryResponse{}, err
	}

	// Retrieve the update
	var newdetails models.InventoryResponse
	var newstock int
	if err := i.DB.Raw("SELECT stock FROM inventories WHERE id=?", pid).Scan(&newstock).Error; err != nil {
		return models.InventoryResponse{}, err
	}
	newdetails.ProductID = pid
	newdetails.Stock = newstock

	return newdetails, nil
}

func (i *inventoryRepository) DeleteInventory(inventoryID string) error {
	id, err := strconv.Atoi(inventoryID)
	if err != nil {
		return errors.New("converting into integer not happened")
	}

	result := i.DB.Exec("DELETE FROM inventories WHERE id = ?", id)

	if result.RowsAffected < 1 {
		return errors.New("no records with that ID exist")
	}

	return nil
}

// detailed product details
func (i *inventoryRepository) IndividualProducts(id string) (models.Inventories, error) {
	pid, error := strconv.Atoi(id)
	if error != nil {
		return models.Inventories{}, errors.New("convertion not happened")
	}
	var product models.Inventories
	err := i.DB.Raw(`
	SELECT
		*
		FROM
			inventories
		
		WHERE
			inventories.id = ?
			`, pid).Scan(&product).Error

	if err != nil {
		return models.Inventories{}, errors.New("error retrieved record")
	}
	return product, nil

}

// detailed product details
func (i *inventoryRepository) ShowIndividualProducts(id string) (models.Inventories, error) {
	pid, error := strconv.Atoi(id)
	if error != nil {
		return models.Inventories{}, errors.New("convertion not happened")
	}
	var product models.Inventories
	err := i.DB.Raw(`
	SELECT
		*
		FROM
			inventories
		
		WHERE
			inventories.id = ?
			`, pid).Scan(&product).Error

	if err != nil {
		return models.Inventories{}, errors.New("error retrieved record")
	}
	return product, nil

}

func (ad *inventoryRepository) ListProducts(page int) ([]models.Inventories, error) {
	// pagination purpose -
	if page == 0 {
		page = 1
	}
	offset := (page - 1) * 10
	var productDetails []models.Inventories

	if err := ad.DB.Raw("select id,category_id,product_name,image,size,stock,price, description from inventories limit $1 offset $2", 10, offset).Scan(&productDetails).Error; err != nil {
		return []models.Inventories{}, err
	}

	for i := range productDetails {
		if err := ad.DB.Model(&productDetails[i]).Association("Tags").Find(&productDetails[i].Tags); err != nil {
			return []models.Inventories{}, err
		}
	}

	return productDetails, nil

}

func (ad *inventoryRepository) ListProductsByCategory(id int) ([]models.Inventories, error) {

	var productDetails []models.Inventories

	if err := ad.DB.Raw("select id,category_id,product_name,image,size,stock,price,description from inventories WHERE category_id = $1", id).Scan(&productDetails).Error; err != nil {
		return []models.Inventories{}, err
	}

	return productDetails, nil

}

func (i *inventoryRepository) CheckStock(pid int) (int, error) {
	var k int
	if err := i.DB.Raw("SELECT stock FROM inventories WHERE id=$1", pid).Scan(&k).Error; err != nil {
		return 0, err
	}
	return k, nil
}

func (i *inventoryRepository) CheckPrice(pid int) (float64, error) {
	var k float64
	err := i.DB.Raw("SELECT price FROM inventories WHERE id=?", pid).Scan(&k).Error
	if err != nil {
		return 0, err
	}

	return k, nil
}

func (ad *inventoryRepository) SearchProducts(key string) ([]models.Inventories, error) {
	var productDetails []models.Inventories

	query := `
	SELECT i.*
	FROM inventories i
	LEFT JOIN categories c ON i.category_id = c.id
	WHERE i.product_name ILIKE '%' || ? || '%'
	OR
	c.category ILIKE '%' || ? || '%'
`
	if err := ad.DB.Raw(query, key, key).Scan(&productDetails).Error; err != nil {
		return []models.Inventories{}, err
	}

	return productDetails, nil
}

func (i *inventoryRepository) UpdateProductImage(id int, url string) error {

	err := i.DB.Exec("UPDATE inventories SET image = $1 WHERE id = $2", url, id).Error
	if err != nil {
		return err
	}

	return nil
}

func (i *inventoryRepository) EditInventoryDetails(id int, model models.EditInventoryDetails) error {

	err := i.DB.Exec("UPDATE inventories SET product_name = $1, category_id = $2, price = $3, size = $4 WHERE id = $5", model.Name, model.CategoryID, model.Price, model.Size, id).Error
	if err != nil {
		return err
	}

	return nil
}

func (i *inventoryRepository) AddTagsToInventory(id int, tagNames []string) error {
	var tags []models.Tag

	for _, tagName := range tagNames {
		var tag models.Tag
		err := i.DB.Where("name = ?", tagName).First(&tag).Error
		if err != nil && err != gorm.ErrRecordNotFound {
			return err
		}
		if err == gorm.ErrRecordNotFound {
			tag = models.Tag{Name: tagName}
			if err := i.DB.Create(&tag).Error; err != nil {
				return err
			}
		}
		tags = append(tags, tag)
	}

	if err := i.DB.Model(&models.Inventories{ID: uint(id)}).Association("Tags").Append(tags); err != nil {
		return err
	}

	return nil
}

// func (i *inventoryRepository) RemoveTagsFromInventory(id int, tagNames []string) error {
// 	var tags []models.Tag

// 	if err := i.DB.Where("name IN ?", tagNames).Find(&tags).Error; err != nil {
// 		return err
// 	}

// 	if err := i.DB.Model(&models.Inventories{ID: uint(id)}).Association("Tags").Delete(tags); err != nil {
// 		return err
// 	}

// 	return nil
// }

// func (i *inventoryRepository) GetTagsOfInventory(inventoryID int) ([]models.Tag, error) {
// 	var inventory models.Inventories
// 	if err := i.DB.Preload("Tags").First(&inventory, inventoryID).Error; err != nil {
// 		return nil, err
// 	}
// 	return inventory.Tags, nil
// }
