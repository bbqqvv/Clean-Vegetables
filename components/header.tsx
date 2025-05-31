"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Sản phẩm", href: "/san-pham" },
    { name: "Câu chuyện", href: "/cau-chuyen" },
    { name: "Thư viện ảnh", href: "/thu-vien-anh" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">Xà lách Ninh Hòa</h1>
              <p className="text-sm text-green-600">Ninh Đa - Ninh Hòa - Khánh Hòa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${pathname === item.href ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" />
              0966467356
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-left transition-colors ${pathname === item.href ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-green-600 hover:bg-green-700 w-fit">
                <Phone className="w-4 h-4 mr-2" />
                0966467356
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
