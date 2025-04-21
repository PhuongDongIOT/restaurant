"use client";

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { checkAuth } from '../features/auths/auth.slice';
import { useAppSelector } from './redux';
import { RootState } from '../store';

interface RequireAuthProps {}

const RequireAuth: React.FC<RequireAuthProps> = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, isLoading } = useAppSelector(
        (state: RootState) => state.auths
    );
    const router = useRouter();

    // Gọi checkAuth khi component mount
    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    // Nếu không được xác thực và không còn loading, thì redirect
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/signin');
        }
    }, [isAuthenticated, isLoading, router]);

    // Show loading UI nếu đang kiểm tra xác thực
    if (isLoading) {
        return <p>Checking authentication...</p>;
    }

    // Nếu chưa xác thực, tạm thời không render gì trong khi redirect
    if (!isAuthenticated) {
        return null;
    }

    // Nếu đã xác thực, có thể render children (hoặc navigate khác)
    return null;
};

export default RequireAuth;
