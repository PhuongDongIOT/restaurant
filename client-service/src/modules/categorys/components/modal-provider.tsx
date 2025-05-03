 "use client";
 
import { createContext, useContext, useState, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho Context
interface ModalContextType {
  modal: boolean;
  setModal: (value: boolean) => void;
}

// Tạo Context với giá trị mặc định
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider Component
interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

// Hook để sử dụng Context
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within an ModalProvider");
  }
  return context;
};
