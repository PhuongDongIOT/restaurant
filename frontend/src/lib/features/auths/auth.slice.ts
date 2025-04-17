// store/slices/authSlice.ts
import storage from "@/lib/cores/local-storage";
import { IAuth } from "@/lib/schemas/auth.schema";
import { IUser } from "@/lib/schemas/user.schema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: IUser | null;
    token: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: true,
    isAuthenticated: false,
};

const authsSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<IAuth>) {
            state.user = action.payload.users;
            state.token = action.payload.token;

            storage.set("auth_user", JSON.stringify(action.payload.users));
            storage.set("auth_token", action.payload.token);
        },
        logout(state) {
            state.user = null;
            state.token = null;

            // ✅ Remove from localStorage
            storage.remove("auth_user");
            storage.remove("auth_token");
        },
        updateUser(state, action: PayloadAction<IUser>) {
            storage.set("auth_user", JSON.stringify(action.payload));
        },
        updateToken(state, action: PayloadAction<string>) {
            storage.set("auth_token", action.payload);
        },
        checkAuth(state) {
            state.isLoading = true;
            const token = storage.get("auth_token");
            state.isLoading = false;
            if (token) state.isAuthenticated = true;
            else state.isAuthenticated = false;
            state.isLoading = false;
        }
    },
});

export const { login, logout, updateUser, updateToken, checkAuth } = authsSlice.actions;
export default authsSlice.reducer;