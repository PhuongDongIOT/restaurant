"use client";

import { Home, User, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/tubelight-navbar"
import { useModalCart } from '@/modules/categorys/components/modal-cart-provider';

export function NavBarFixed() {
  const { setModalCart } = useModalCart();
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Category', url: '/categories', icon: User },
    { name: 'Cart', url: '#', icon: Briefcase, callback: () => setModalCart(true) },
  ]

  return <NavBar items={navItems} />;
}
