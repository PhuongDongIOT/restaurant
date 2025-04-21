import { IRegisterUser, ISignInUser } from "../schemas/user.schema";

export const defaultValuesUser: IRegisterUser = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
};

export const defaultValuesSignInUser: ISignInUser = {
    email: "",
    password: "",
};
