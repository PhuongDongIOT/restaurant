"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { makeStore } from "../lib/store";

type ProvidersReduxProps = {
    children: React.ReactNode;
};
const ProvidersRedux = ({ children }: ProvidersReduxProps) => {
    const { store, persistor } = makeStore();

    return (
        <Provider store={store}>
            <PersistGate
                loading={
                    <div className="flex items-center justify-center h-96">
                        ...
                    </div>
                }
                persistor={persistor}
            >
                {children}
            </PersistGate>
        </Provider>
    );
};

export default ProvidersRedux;