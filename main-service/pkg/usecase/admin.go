package usecase

import (
	"errors"
	"log"

	domain "main-service/pkg/domain"
	helper_interface "main-service/pkg/helper/interface"
	interfaces "main-service/pkg/repository/interface"
	services "main-service/pkg/usecase/interface"
	"main-service/pkg/utils/models"

	"github.com/jinzhu/copier"
	"golang.org/x/crypto/bcrypt"
)

type adminUseCase struct {
	adminRepository interfaces.AdminRepository
	helper          helper_interface.Helper
}

func NewAdminUseCase(repo interfaces.AdminRepository, h helper_interface.Helper) services.AdminUseCase {
	return &adminUseCase{
		adminRepository: repo,
		helper:          h,
	}
}

func (i *adminUseCase) GetCustomerDetails(id int) (models.UserDetailsResponse, error) {

	details, err := i.adminRepository.GetCustomerDetails(id)
	if err != nil {
		return models.UserDetailsResponse{}, errors.New("error in getting details")
	}

	return details, nil

}

func (ad *adminUseCase) LoginHandler(adminDetails models.AdminLogin) (domain.TokenAdmin, error) {

	// getting details of the admin based on the email provided
	adminCompareDetails, err := ad.adminRepository.LoginHandler(adminDetails)
	if err != nil {
		return domain.TokenAdmin{}, err
	}
	log.Println("Đây là một thông báo log đơn giản.")
	log.Printf("Thông báo log với định dạng: %s", adminCompareDetails.Password)
	log.Printf("Thông báo log với định dạng: %s", adminDetails.Password)
	// compare password from database and that provided from admins
	err = bcrypt.CompareHashAndPassword([]byte(adminCompareDetails.Password), []byte(adminDetails.Password))
	if err != nil {
		return domain.TokenAdmin{}, err
	}

	var adminDetailsResponse models.AdminDetailsResponse

	//  copy all details except password and sent it back to the front end
	err = copier.Copy(&adminDetailsResponse, &adminCompareDetails)
	if err != nil {
		return domain.TokenAdmin{}, err
	}

	access, refresh, err := ad.helper.GenerateTokenAdmin(adminDetailsResponse)

	if err != nil {
		return domain.TokenAdmin{}, err
	}

	return domain.TokenAdmin{
		Admin:        adminDetailsResponse,
		AccessToken:  access,
		RefreshToken: refresh,
	}, nil

}

func (ad *adminUseCase) BlockUser(id string) error {

	user, err := ad.adminRepository.GetUserByID(id)
	if err != nil {
		return err
	}

	if user.Blocked {
		return errors.New("already blocked")
	} else {
		user.Blocked = true
	}

	err = ad.adminRepository.UpdateBlockUserByID(user)
	if err != nil {
		return err
	}

	return nil

}

// unblock user
func (ad *adminUseCase) UnBlockUser(id string) error {

	user, err := ad.adminRepository.GetUserByID(id)
	if err != nil {
		return err
	}

	if user.Blocked {
		user.Blocked = false
	} else {
		return errors.New("already unblocked")
	}

	err = ad.adminRepository.UpdateBlockUserByID(user)
	if err != nil {
		return err
	}

	return nil

}

func (ad *adminUseCase) GetUsers(page int) ([]models.UserDetailsAtAdmin, error) {

	userDetails, err := ad.adminRepository.GetUsers(page)
	if err != nil {
		return []models.UserDetailsAtAdmin{}, err
	}

	return userDetails, nil

}

func (i *adminUseCase) NewPaymentMethod(id string) error {

	exists, err := i.adminRepository.CheckIfPaymentMethodAlreadyExists(id)
	if err != nil {
		return err
	}

	if exists {
		return errors.New("payment method already exists")
	}

	err = i.adminRepository.NewPaymentMethod(id)
	if err != nil {
		return err
	}

	return nil

}

func (a *adminUseCase) ListPaymentMethods() ([]domain.PaymentMethod, error) {

	categories, err := a.adminRepository.ListPaymentMethods()
	if err != nil {
		return []domain.PaymentMethod{}, err
	}
	return categories, nil

}

func (a *adminUseCase) DeletePaymentMethod(id int) error {

	err := a.adminRepository.DeletePaymentMethod(id)
	if err != nil {
		return err
	}
	return nil

}
