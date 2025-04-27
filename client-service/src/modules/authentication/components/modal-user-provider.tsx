"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalUserContextType {
    modalUser: boolean;
    setModalUser: (value: boolean) => void;
}

const ModalUserContext = createContext<ModalUserContextType | undefined>(undefined);

interface ModalUserProviderProps {
    children: ReactNode;
}

export const ModalUserProvider: React.FC<ModalUserProviderProps> = ({ children }) => {
    const [modalUser, setModalUser] = useState<boolean>(false);

    return (
        <ModalUserContext.Provider value={{ modalUser, setModalUser }}>
            {children}
        </ModalUserContext.Provider>
    );
};

export const useModalUser = (): ModalUserContextType => {
    const context = useContext(ModalUserContext);
    if (!context) {
        throw new Error("useModal must be used within an ModalUserProvider");
    }
    return context;
};
