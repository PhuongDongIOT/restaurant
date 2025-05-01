import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { useModalUser } from "../components/modal-user-provider";

export function useCheckUser() {
    const { modalUser, setModalUser } = useModalUser();
    const { user, isAuthenticated, token } = useAppSelector(
        (state: RootState) => state.auths
    );


    const functionCheckauth = () => {
        if (!token) setModalUser(true)
    }

    return {
        user,
        token,
        isAuthenticated,
        functionCheckauth
    }
}
