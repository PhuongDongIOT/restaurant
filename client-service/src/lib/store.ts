import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./customs/storage";
import authsReducer from "./features/auths/auth.slice";
import productsReducer from "./features/products/products.slice";
import cartsReducer from "./features/carts/carts.slice";
// import { auth } from "./auths/auth";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["carts", "auths"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  auths: authsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  const persistor = persistStore(store);
  return { store, persistor };
};

const store = makeStore().store;

// Infer the type of the store
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
