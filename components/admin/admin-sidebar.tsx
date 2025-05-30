"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Package,
  ImageIcon,
  MessageSquare,
  Users,
  Settings,
  BarChart3,
  Eye,
} from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Bài viết",
      href: "/admin/bai-viet",
      icon: FileText,
    },
    {
      title: "Sản phẩm",
      href: "/admin/san-pham",
      icon: Package,
    },
    {
      title: "Hình ảnh",
      href: "/admin/hinh-anh",
      icon: ImageIcon,
    },
    {
      title: "Testimonials",
      href: "/admin/testimonials",
      icon: MessageSquare,
    },
    {
      title: "Liên hệ",
      href: "/admin/lien-he",
      icon: Users,
    },
    {
      title: "Thống kê",
      href: "/admin/thong-ke",
      icon: BarChart3,
    },
    {
      title: "Cài đặt",
      href: "/admin/cai-dat",
      icon: Settings,
    },
  ]

  return (
    <aside className="w-64 bg-white shadow-sm border-r min-h-screen">
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 pt-4 border-t">
          <Link
            href="/"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Eye className="w-5 h-5" />
            <span className="font-medium">Xem website</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
