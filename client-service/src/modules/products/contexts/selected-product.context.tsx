'use client'

import { IProduct } from '@/lib/schemas/product.schema';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SelectedProductContextType = {
    selectedProduct: IProduct | null;
    setSelectedProduct: (product: IProduct) => void;
    updateSelectedProduct: (data: Partial<IProduct>) => void;
    clearSelectedProduct: () => void;
};

const SelectedProductContext = createContext<SelectedProductContextType | undefined>(undefined);

const SelectedProductProvider = ({ children }: { children: ReactNode }) => {
    const [selectedProduct, setSelectedProductState] = useState<IProduct | null>(null);

    const setSelectedProduct = (product: IProduct) => {
        setSelectedProductState(product);
    };

    const updateSelectedProduct = (data: Partial<IProduct>) => {
        setSelectedProductState(prev =>
            prev ? { ...prev, ...data } : prev
        );
    };

    const clearSelectedProduct = () => {
        setSelectedProductState(null);
    };

    return (
        <SelectedProductContext.Provider
            value={{ selectedProduct, setSelectedProduct, updateSelectedProduct, clearSelectedProduct }}
        >
            {children}
        </SelectedProductContext.Provider>
    );
};

export default SelectedProductProvider;

export const useSelectedProduct = (): SelectedProductContextType => {
    const context = useContext(SelectedProductContext);
    if (!context) throw new Error('useSelectedProduct must be used within SelectedProductProvider');
    return context;
};
