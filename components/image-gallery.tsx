"use client"

import { useState } from "react"
import Image from "next/image"

export function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Tất cả", count: 24 },
    { id: "garden", name: "Vườn rau", count: 8 },
    { id: "products", name: "Sản phẩm", count: 10 },
    { id: "harvest", name: "Thu hoạch", count: 6 },
  ]

  const images = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Vườn rau xanh tươi buổi sáng",
      category: "garden",
      title: "Vườn rau buổi sáng sớm",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Rau cải xanh tươi ngon",
      category: "products",
      title: "Rau cải xanh tươi",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Ba mẹ đang thu hoạch rau",
      category: "harvest",
      title: "Thu hoạch rau sáng sớm",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Hệ thống tưới nước tự động",
      category: "garden",
      title: "Hệ thống tưới nước",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Cà chua chín đỏ tự nhiên",
      category: "products",
      title: "Cà chua chín tự nhiên",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Rau được đóng gói cẩn thận",
      category: "harvest",
      title: "Đóng gói sản phẩm",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Luống rau được chăm sóc kỹ lưỡng",
      category: "garden",
      title: "Luống rau ngăn nắp",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Rau muống xanh non",
      category: "products",
      title: "Rau muống tươi ngon",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Chở rau ra chợ bán",
      category: "harvest",
      title: "Chở rau ra chợ",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Nhà kính bảo vệ rau khỏi mưa",
      category: "garden",
      title: "Nhà kính bảo vệ",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Xà lách giòn ngọt",
      category: "products",
      title: "Xà lách tươi giòn",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Khách hàng chọn mua rau",
      category: "harvest",
      title: "Khách hàng mua rau",
    },
  ]

  const filteredImages = selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Xem thêm hình ảnh
          </button>
        </div>
      </div>
    </section>
  )
}
