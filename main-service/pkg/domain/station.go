package domain

type Station struct {
	ID          uint   `json:"id" gorm:"unique;not null"`
	Name        string `json:"name" validate:"required"`
	UserID      string `json:"user_id" validate:"required"`
	Description string `json:"description"`
}
