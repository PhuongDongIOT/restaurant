"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalCartContextType {
    modalCart: boolean;
    setModalCart: (value: boolean) => void;
}

const ModalCartContext = createContext<ModalCartContextType | undefined>(undefined);

interface ModalCartProviderProps {
    children: ReactNode;
}

export const ModalCartProvider: React.FC<ModalCartProviderProps> = ({ children }) => {
    const [modalCart, setModalCart] = useState<boolean>(false);

    return (
        <ModalCartContext.Provider value={{ modalCart, setModalCart }}>
            {children}
        </ModalCartContext.Provider>
    );
};

export const useModalCart = (): ModalCartContextType => {
    const context = useContext(ModalCartContext);
    if (!context) {
        throw new Error("useModal must be used within an ModalCartProvider");
    }
    return context;
};
