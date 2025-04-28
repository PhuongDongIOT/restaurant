import { useAppDispatch } from '@/lib/hooks/redux';
import { login } from '@/lib/features/auths/auth.slice';
import { authUserService } from '@/lib/services/auth.service';
import { IRegisterUser, ISignInUser } from '@/lib/schemas/user.schema';
import { loginSuccessToast } from '../components/notifycations/authentication-noti';

type IUseVerifyCustomer = {
    onChangeCustomer?: (value: boolean) => void;
}
export function useVerifyCustomer({ onChangeCustomer }: IUseVerifyCustomer) {
    const dispatch = useAppDispatch();

    const handleLogin = async (values: ISignInUser) => {
        try {
            const { data: auth } = await authUserService.login(values);

            if (auth) {
                dispatch(login(auth));
                loginSuccessToast(auth.users?.email ?? '');
                onChangeCustomer && onChangeCustomer(false);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleSignup = async (values: IRegisterUser) => {
        try {
            const { data: auth } = await authUserService.signup(values);

            if (auth) {
                dispatch(login(auth));
                loginSuccessToast(auth.users?.email ?? '');
                onChangeCustomer && onChangeCustomer(false);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return { handleLogin, handleSignup };
}
