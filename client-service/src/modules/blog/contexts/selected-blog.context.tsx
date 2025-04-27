'use client'

import { IProduct } from '@/lib/schemas/product.schema';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SelectedBlogContextType = {
    SelectedBlog: IProduct | null;
    setSelectedBlog: (product: IProduct) => void;
    updateSelectedBlog: (data: Partial<IProduct>) => void;
    clearSelectedBlog: () => void;
};

const SelectedBlogContext = createContext<SelectedBlogContextType | undefined>(undefined);

export const SelectedBlogProvider = ({ children }: { children: ReactNode }) => {
    const [SelectedBlog, setSelectedBlogState] = useState<IProduct | null>(null);

    const setSelectedBlog = (product: IProduct) => {
        setSelectedBlogState(product);
    };

    const updateSelectedBlog = (data: Partial<IProduct>) => {
        setSelectedBlogState(prev =>
            prev ? { ...prev, ...data } : prev
        );
    };

    const clearSelectedBlog = () => {
        setSelectedBlogState(null);
    };

    return (
        <SelectedBlogContext.Provider
            value={{ SelectedBlog, setSelectedBlog, updateSelectedBlog, clearSelectedBlog }}
        >
            {children}
        </SelectedBlogContext.Provider>
    );
};

export const useSelectedBlog = (): SelectedBlogContextType => {
    const context = useContext(SelectedBlogContext);
    if (!context) throw new Error('useSelectedBlog must be used within SelectedBlogProvider');
    return context;
};
