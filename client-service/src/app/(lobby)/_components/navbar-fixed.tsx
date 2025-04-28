"use client";

import { Home, User, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/organims/tubelight-navbar"
import { useModalCart } from '@/modules/categorys/components/modal-cart-provider';
import { useCheckUser } from '@/modules/authentication/hook/use-check-user';

export function NavBarFixed() {
  const { setModalCart } = useModalCart();
  const { functionCheckauth, token } = useCheckUser();

  const navItems = [
    { name: 'Trang chủ', url: '/', icon: Home },
    { name: 'Danh mục', url: '/categories', icon: User },
    { name: 'Giỏ hàng', url: '#', icon: Briefcase, callback: () => setModalCart(true) },
    { name: token ? 'Bạn' : 'Đăng nhập', url: '#', icon: User, callback: () => functionCheckauth() },
  ]

  return <NavBar items={navItems} />;
}
