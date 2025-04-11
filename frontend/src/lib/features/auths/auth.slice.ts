// store/slices/authSlice.ts
import storage from "@/lib/cores/local-storage";
import { IAuth } from "@/lib/schemas/auth.schema";
import { IUser } from "@/lib/schemas/user.schema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: IUser | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
};

const authsSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<IAuth>) {
            state.user = action.payload.users;
            state.token = action.payload.token;
            console.log(action.payload);
            
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
    },
});

export const { login, logout, updateUser, updateToken } = authsSlice.actions;
export default authsSlice.reducer;