"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Star, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export function TestimonialsManagement() {
  const [testimonials] = useState([
    {
      id: 1,
      name: "Chị Lan Anh",
      location: "Gò Quao, Kiên Giang",
      rating: 5,
      comment: "Mua rau của bác Năm được 3 năm rồi, rau luôn tươi ngon và sạch. Con em ăn rau nhiều hơn hẳn!",
      date: "25/01/2024",
      status: "published",
      featured: true,
    },
    {
      id: 2,
      name: "Anh Minh Tuấn",
      location: "Rạch Giá, Kiên Giang",
      rating: 5,
      comment: "Chất lượng rau rất tốt, giao hàng đúng giờ. Gia đình tôi chỉ mua rau của bác thôi.",
      date: "23/01/2024",
      status: "published",
      featured: false,
    },
    {
      id: 3,
      name: "Cô Hương",
      location: "Gò Quao, Kiên Giang",
      rating: 5,
      comment: "Bác Năm và cô Sáu rất tận tình, rau sạch thật sự. Giá cả hợp lý, sẽ giới thiệu cho bạn bè.",
      date: "20/01/2024",
      status: "pending",
      featured: false,
    },
    {
      id: 4,
      name: "Chị Mai",
      location: "Hà Tiên, Kiên Giang",
      rating: 4,
      comment: "Rau tươi ngon, đóng gói cẩn thận. Chỉ có điều giao hàng hơi chậm một chút.",
      date: "18/01/2024",
      status: "published",
      featured: false,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Đã xuất bản</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Chờ duyệt</Badge>
      case "hidden":
        return <Badge variant="secondary">Đã ẩn</Badge>
      default:
        return <Badge variant="outline">Không xác định</Badge>
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Danh sách testimonials</h2>
          <p className="text-gray-600">Quản lý đánh giá và phản hồi từ khách hàng</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700" asChild>
          <Link href="/admin/testimonials/them-moi">
            <Plus className="w-4 h-4 mr-2" />
            Thêm testimonial
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">4.8</div>
            <p className="text-sm text-gray-600">Đánh giá trung bình</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <p className="text-sm text-gray-600">Tổng testimonials</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <p className="text-sm text-gray-600">Chờ duyệt</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">6</div>
            <p className="text-sm text-gray-600">Nổi bật</p>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials List */}
      <Card>
        <CardHeader>
          <CardTitle>Testimonials gần đây</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg">
                      👤
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {testimonial.featured && (
                      <Badge variant="outline" className="text-purple-600 border-purple-600">
                        Nổi bật
                      </Badge>
                    )}
                    {getStatusBadge(testimonial.status)}
                  </div>
                </div>

                <div className="mb-3">{renderStars(testimonial.rating)}</div>

                <p className="text-gray-700 mb-3 italic">"{testimonial.comment}"</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      {testimonial.status === "published" ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
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
