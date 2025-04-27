"use client";

import { Home, User, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/organims/tubelight-navbar"
import { useModalCart } from '@/modules/categorys/components/modal-cart-provider';
import { useModalUser } from '@/modules/authentication/components/modal-user-provider';

export function NavBarFixed() {
  const { setModalCart } = useModalCart();
  const { setModalUser } = useModalUser();
  const navItems = [
    { name: 'Trang chủ', url: '/', icon: Home },
    { name: 'Danh mục', url: '/categories', icon: User },
    { name: 'Giỏ hàng', url: '#', icon: Briefcase, callback: () => setModalCart(true) },
    { name: 'Bạn', url: '/', icon: Briefcase, callback: () => setModalUser(true) },
  ]

  return <NavBar items={navItems} />;
}
