"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Trash2, Download, Eye } from "lucide-react"
import NextImage from "next/image"

export function ImageManagement() {
  const [images] = useState([
    {
      id: 1,
      name: "vuon-rau-sang-som.jpg",
      url: "/placeholder.svg?height=200&width=300",
      size: "2.4 MB",
      uploadDate: "25/01/2024",
      category: "Vườn rau",
    },
    {
      id: 2,
      name: "rau-cai-xanh-tuoi.jpg",
      url: "/placeholder.svg?height=200&width=300",
      size: "1.8 MB",
      uploadDate: "24/01/2024",
      category: "Sản phẩm",
    },
    {
      id: 3,
      name: "thu-hoach-rau.jpg",
      url: "/placeholder.svg?height=200&width=300",
      size: "3.1 MB",
      uploadDate: "23/01/2024",
      category: "Thu hoạch",
    },
    {
      id: 4,
      name: "ca-chua-chin.jpg",
      url: "/placeholder.svg?height=200&width=300",
      size: "2.7 MB",
      uploadDate: "22/01/2024",
      category: "Sản phẩm",
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Thư viện hình ảnh</h2>
          <p className="text-gray-600">Upload và quản lý hình ảnh cho website</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Upload className="w-4 h-4 mr-2" />
          Upload hình ảnh
        </Button>
      </div>

      {/* Upload Area */}
      <Card>
        <CardContent className="p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Kéo thả hình ảnh vào đây</h3>
            <p className="text-gray-500 mb-4">hoặc click để chọn file</p>
            <Button variant="outline">Chọn file</Button>
          </div>
        </CardContent>
      </Card>

      {/* Images Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Hình ảnh đã upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div key={image.id} className="border rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <NextImage src={image.url || "/placeholder.svg"} alt={image.name} fill className="object-cover" />
                </div>

                <div className="p-4">
                  <h4 className="font-medium text-sm text-gray-900 truncate">{image.name}</h4>
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                    <span>{image.size}</span>
                    <span>{image.uploadDate}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {image.category}
                    </span>
                  </div>

                  <div className="flex justify-between mt-3">
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-3 h-3" />
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
