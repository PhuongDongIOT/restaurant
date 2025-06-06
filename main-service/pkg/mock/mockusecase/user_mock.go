// Code generated by MockGen. DO NOT EDIT.
// Source: pkg/usecase/interface/user.go

// Package mockusecase is a generated GoMock package.
package mockusecase

import (
	domain "main-service/pkg/domain"
	models "main-service/pkg/utils/models"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// MockUserUseCase is a mock of UserUseCase interface.
type MockUserUseCase struct {
	ctrl     *gomock.Controller
	recorder *MockUserUseCaseMockRecorder
}

// QuickLoginHandler implements interfaces.UserUseCase.
func (m *MockUserUseCase) QuickLoginHandler(email string) (models.TokenUsers, error) {
	panic("unimplemented")
}

// LoginQuickHandler implements interfaces.UserUseCase.
func (m *MockUserUseCase) LoginQuickHandler(user models.QuickLogin) (models.TokenUsers, error) {
	panic("unimplemented")
}

// MockUserUseCaseMockRecorder is the mock recorder for MockUserUseCase.
type MockUserUseCaseMockRecorder struct {
	mock *MockUserUseCase
}

// NewMockUserUseCase creates a new mock instance.
func NewMockUserUseCase(ctrl *gomock.Controller) *MockUserUseCase {
	mock := &MockUserUseCase{ctrl: ctrl}
	mock.recorder = &MockUserUseCaseMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockUserUseCase) EXPECT() *MockUserUseCaseMockRecorder {
	return m.recorder
}

// AddAddress mocks base method.
func (m *MockUserUseCase) AddAddress(id int, address models.AddAddress) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddAddress", id, address)
	ret0, _ := ret[0].(error)
	return ret0
}

// AddAddress indicates an expected call of AddAddress.
func (mr *MockUserUseCaseMockRecorder) AddAddress(id, address interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddAddress", reflect.TypeOf((*MockUserUseCase)(nil).AddAddress), id, address)
}

// ChangePassword mocks base method.
func (m *MockUserUseCase) ChangePassword(id int, old, password, repassword string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ChangePassword", id, old, password, repassword)
	ret0, _ := ret[0].(error)
	return ret0
}

// ChangePassword indicates an expected call of ChangePassword.
func (mr *MockUserUseCaseMockRecorder) ChangePassword(id, old, password, repassword interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ChangePassword", reflect.TypeOf((*MockUserUseCase)(nil).ChangePassword), id, old, password, repassword)
}

// EditEmail mocks base method.
func (m *MockUserUseCase) EditEmail(id int, email string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "EditEmail", id, email)
	ret0, _ := ret[0].(error)
	return ret0
}

// EditEmail indicates an expected call of EditEmail.
func (mr *MockUserUseCaseMockRecorder) EditEmail(id, email interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "EditEmail", reflect.TypeOf((*MockUserUseCase)(nil).EditEmail), id, email)
}

// EditName mocks base method.
func (m *MockUserUseCase) EditName(id int, name string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "EditName", id, name)
	ret0, _ := ret[0].(error)
	return ret0
}

// EditName indicates an expected call of EditName.
func (mr *MockUserUseCaseMockRecorder) EditName(id, name interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "EditName", reflect.TypeOf((*MockUserUseCase)(nil).EditName), id, name)
}

// EditPhone mocks base method.
func (m *MockUserUseCase) EditPhone(id int, phone string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "EditPhone", id, phone)
	ret0, _ := ret[0].(error)
	return ret0
}

// EditPhone indicates an expected call of EditPhone.
func (mr *MockUserUseCaseMockRecorder) EditPhone(id, phone interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "EditPhone", reflect.TypeOf((*MockUserUseCase)(nil).EditPhone), id, phone)
}

// ForgotPasswordSend mocks base method.
func (m *MockUserUseCase) ForgotPasswordSend(phone string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ForgotPasswordSend", phone)
	ret0, _ := ret[0].(error)
	return ret0
}

// ForgotPasswordSend indicates an expected call of ForgotPasswordSend.
func (mr *MockUserUseCaseMockRecorder) ForgotPasswordSend(phone interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ForgotPasswordSend", reflect.TypeOf((*MockUserUseCase)(nil).ForgotPasswordSend), phone)
}

// ForgotPasswordVerifyAndChange mocks base method.
func (m *MockUserUseCase) ForgotPasswordVerifyAndChange(model models.ForgotVerify) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ForgotPasswordVerifyAndChange", model)
	ret0, _ := ret[0].(error)
	return ret0
}

// ForgotPasswordVerifyAndChange indicates an expected call of ForgotPasswordVerifyAndChange.
func (mr *MockUserUseCaseMockRecorder) ForgotPasswordVerifyAndChange(model interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ForgotPasswordVerifyAndChange", reflect.TypeOf((*MockUserUseCase)(nil).ForgotPasswordVerifyAndChange), model)
}

// GetAddresses mocks base method.
func (m *MockUserUseCase) GetAddresses(id int) ([]domain.Address, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetAddresses", id)
	ret0, _ := ret[0].([]domain.Address)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetAddresses indicates an expected call of GetAddresses.
func (mr *MockUserUseCaseMockRecorder) GetAddresses(id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetAddresses", reflect.TypeOf((*MockUserUseCase)(nil).GetAddresses), id)
}

// GetCart mocks base method.
func (m *MockUserUseCase) GetCart(id int) (models.GetCartResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetCart", id)
	ret0, _ := ret[0].(models.GetCartResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetCart indicates an expected call of GetCart.
func (mr *MockUserUseCaseMockRecorder) GetCart(id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetCart", reflect.TypeOf((*MockUserUseCase)(nil).GetCart), id)
}

// GetMyReferenceLink mocks base method.
func (m *MockUserUseCase) GetMyReferenceLink(id int) (string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetMyReferenceLink", id)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyReferenceLink indicates an expected call of GetMyReferenceLink.
func (mr *MockUserUseCaseMockRecorder) GetMyReferenceLink(id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyReferenceLink", reflect.TypeOf((*MockUserUseCase)(nil).GetMyReferenceLink), id)
}

// GetUserDetails mocks base method.
func (m *MockUserUseCase) GetUserDetails(id int) (models.UserDetailsResponse, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetUserDetails", id)
	ret0, _ := ret[0].(models.UserDetailsResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetUserDetails indicates an expected call of GetUserDetails.
func (mr *MockUserUseCaseMockRecorder) GetUserDetails(id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetUserDetails", reflect.TypeOf((*MockUserUseCase)(nil).GetUserDetails), id)
}

// LoginHandler mocks base method.
func (m *MockUserUseCase) LoginHandler(user models.UserLogin) (models.TokenUsers, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "LoginHandler", user)
	ret0, _ := ret[0].(models.TokenUsers)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// LoginHandler indicates an expected call of LoginHandler.
func (mr *MockUserUseCaseMockRecorder) LoginHandler(user interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "LoginHandler", reflect.TypeOf((*MockUserUseCase)(nil).LoginHandler), user)
}

// RemoveFromCart mocks base method.
func (m *MockUserUseCase) RemoveFromCart(cart, inventory int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RemoveFromCart", cart, inventory)
	ret0, _ := ret[0].(error)
	return ret0
}

// RemoveFromCart indicates an expected call of RemoveFromCart.
func (mr *MockUserUseCaseMockRecorder) RemoveFromCart(cart, inventory interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RemoveFromCart", reflect.TypeOf((*MockUserUseCase)(nil).RemoveFromCart), cart, inventory)
}

// UpdateQuantityAdd mocks base method.
func (m *MockUserUseCase) UpdateQuantityAdd(id, inv_id int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateQuantityAdd", id, inv_id)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateQuantityAdd indicates an expected call of UpdateQuantityAdd.
func (mr *MockUserUseCaseMockRecorder) UpdateQuantityAdd(id, inv_id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateQuantityAdd", reflect.TypeOf((*MockUserUseCase)(nil).UpdateQuantityAdd), id, inv_id)
}

// UpdateQuantityLess mocks base method.
func (m *MockUserUseCase) UpdateQuantityLess(id, inv_id int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateQuantityLess", id, inv_id)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateQuantityLess indicates an expected call of UpdateQuantityLess.
func (mr *MockUserUseCaseMockRecorder) UpdateQuantityLess(id, inv_id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateQuantityLess", reflect.TypeOf((*MockUserUseCase)(nil).UpdateQuantityLess), id, inv_id)
}

// UserSignUp mocks base method.
func (m *MockUserUseCase) UserSignUp(user models.UserDetails, ref string) (models.TokenUsers, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UserSignUp", user, ref)
	ret0, _ := ret[0].(models.TokenUsers)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UserSignUp indicates an expected call of UserSignUp.
func (mr *MockUserUseCaseMockRecorder) UserSignUp(user, ref interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UserSignUp", reflect.TypeOf((*MockUserUseCase)(nil).UserSignUp), user, ref)
}
