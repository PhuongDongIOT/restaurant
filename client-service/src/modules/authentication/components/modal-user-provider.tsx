"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalUserContextType {
    modalUser: boolean;
    setModalUser: (value: boolean) => void;
    signupUser: boolean;
    setSignupUser: (value: boolean) => void;
}

const ModalUserContext = createContext<ModalUserContextType | undefined>(undefined);

interface ModalUserProviderProps {
    children: ReactNode;
}

const ModalUserProvider: React.FC<ModalUserProviderProps> = ({ children }) => {
    const [modalUser, setModalUser] = useState<boolean>(false);
    const [signupUser, setSignupUser] = useState<boolean>(false);

    return (
        <ModalUserContext.Provider value={{ modalUser, setModalUser, signupUser, setSignupUser }}>
            {children}
        </ModalUserContext.Provider>
    );
};
export default ModalUserProvider;

export const useModalUser = (): ModalUserContextType => {
    const context = useContext(ModalUserContext);
    if (!context) {
        throw new Error("useModal must be used within an ModalUserProvider");
    }
    return context;
};
