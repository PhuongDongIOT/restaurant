package models

type Station struct {
	Name        string `json:"name" validate:"required"`
	UserID      int    `json:"user_id" validate:"required"`
	Description string `json:"description"`
}

type StationResponse struct {
	ID          uint   `json:"id"`
	Name        string `json:"name" validate:"required"`
	UserID      int    `json:"user_id" validate:"required"`
	Description string `json:"description"`
}
