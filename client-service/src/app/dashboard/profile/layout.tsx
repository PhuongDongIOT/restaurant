import { Separator } from "@radix-ui/react-context-menu"
import { Metadata } from "next"
import Image from "next/image"
import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Hồ sơ",
    href: "/dashboard/profile",
  },
  {
    title: "Tài khoản",
    href: "/dashboard/profile/account",
  },
  {
    title: "Giao diện",
    href: "/dashboard/profile/appearance",
  },
  {
    title: "Thông báo",
    href: "/dashboard/profile/notifications",
  },
  {
    title: "Hiển thị",
    href: "/dashboard/profile/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Cài đặt</h2>
          <p className="text-muted-foreground">
            Quản lý cài đặt tài khoản của bạn và thiết lập tùy chọn email.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
