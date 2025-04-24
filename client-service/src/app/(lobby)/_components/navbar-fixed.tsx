"use client";

import { Home, User, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/organims/tubelight-navbar"
import { useModalCart } from '@/modules/categorys/components/modal-cart-provider';

export function NavBarFixed() {
  const { setModalCart } = useModalCart();
  const navItems = [
    { name: 'Trang chủ', url: '/', icon: Home },
    { name: 'Danh mục', url: '/categories', icon: User },
    { name: 'Giỏ hàng', url: '#', icon: Briefcase, callback: () => setModalCart(true) },
  ]

  return <NavBar items={navItems} />;
}
