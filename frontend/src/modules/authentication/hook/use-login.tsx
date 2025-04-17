// src/modules/auth/hooks/useLogin.ts
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/hooks/redux';
import { login } from '@/lib/features/auths/auth.slice';
import authService from '@/lib/services/auth.service';
import { ISignInUser } from '@/lib/schemas/user.schema';
import { loginSuccessToast } from '../components/notifycations/authentication-noti';

export function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogin = async (values: ISignInUser) => {
    try {
      const { data: auth } = await authService.signin(values);

      if (auth) {
        dispatch(login(auth));
        loginSuccessToast(auth.users?.email ?? '');
        router.push('/dashboard/overview');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Bạn có thể thêm toast thông báo lỗi tại đây nếu muốn
    }
  };

  return { handleLogin };
}
