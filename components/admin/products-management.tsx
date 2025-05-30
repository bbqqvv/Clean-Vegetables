"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2 } from "lucide-react"
import NextImage from "next/image"
import Link from "next/link"

export function ProductsManagement() {
  const [products] = useState([
    {
      id: 1,
      name: "Rau Cải Xanh",
      category: "Rau lá xanh",
      status: "active",
      image: "/placeholder.svg?height=60&width=60",
      description: "Cải xanh tươi ngon, giòn ngọt",
    },
    {
      id: 2,
      name: "Cà Chua",
      category: "Rau củ quả",
      status: "active",
      image: "/placeholder.svg?height=60&width=60",
      description: "Cà chua chín tự nhiên, ngọt thanh",
    },
    {
      id: 3,
      name: "Rau Muống",
      category: "Rau lá xanh",
      status: "inactive",
      image: "/placeholder.svg?height=60&width=60",
      description: "Rau muống non, sạch",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Đang bán</Badge>
      case "inactive":
        return <Badge variant="secondary">Tạm ngưng</Badge>
      default:
        return <Badge variant="outline">Không xác định</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Danh sách sản phẩm</h2>
          <p className="text-gray-600">Quản lý các loại rau trong danh mục</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700" asChild>
          <Link href="/admin/san-pham/them-moi">
            <Plus className="w-4 h-4 mr-2" />
            Thêm sản phẩm
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sản phẩm hiện tại</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <NextImage
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {getStatusBadge(product.status)}

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
