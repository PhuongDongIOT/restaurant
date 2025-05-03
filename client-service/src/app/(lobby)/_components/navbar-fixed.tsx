"use client";

import { Home, User, Briefcase, Airplay } from 'lucide-react'
import { NavBar } from "@/components/organims/tubelight-navbar"
import { useModalCart } from '@/modules/categorys/components/modal-cart-provider';
import { useCheckUser } from '@/modules/authentication/hook/use-check-user';
import { useRouter } from 'next/navigation';

export default function NavBarFixed() {
  const router = useRouter();
  const { setModalCart } = useModalCart();
  const { functionCheckauth, token } = useCheckUser();

  const navItems = !token ? [
    { name: 'Trang chủ', url: '/', icon: Home },
    { name: 'Danh mục', url: '/categories', icon: Airplay },
    { name: 'Đăng nhập', url: '#', icon: User, callback: () => functionCheckauth() },
  ] : [
    { name: 'Trang chủ', url: '/', icon: Home },
    { name: 'Danh mục', url: '/categories', icon: Airplay },
    { name: 'Giỏ hàng', url: '#', icon: Briefcase, callback: () => setModalCart(true) },
    { name: 'Bạn', url: '#', icon: User, callback: () => router.push('/profile') },
  ]

  return <NavBar items={navItems} />;
}
