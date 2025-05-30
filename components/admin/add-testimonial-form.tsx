"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Save, Star } from "lucide-react"

export function AddTestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    rating: 5,
    comment: "",
    status: "pending",
    featured: false,
  })

  const handleInputChange = (field: string, value: string | boolean | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting testimonial:", formData)
    // Handle form submission
  }

  const renderStarRating = () => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleInputChange("rating", star)}
            className={`p-1 ${star <= formData.rating ? "text-yellow-400" : "text-gray-300"} hover:text-yellow-400`}
          >
            <Star className="w-6 h-6 fill-current" />
          </button>
        ))}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin khách hàng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Họ và tên *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="VD: Chị Lan Anh"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location">Địa chỉ *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="VD: Gò Quao, Kiên Giang"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="0987 123 456"
                  />
                </div>
              </div>

              <div>
                <Label>Đánh giá *</Label>
                <div className="flex items-center space-x-3 mt-2">
                  {renderStarRating()}
                  <span className="text-sm text-gray-600">{formData.rating} sao</span>
                </div>
              </div>

              <div>
                <Label htmlFor="comment">Nội dung đánh giá *</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => handleInputChange("comment", e.target.value)}
                  placeholder="Chia sẻ trải nghiệm của khách hàng về sản phẩm..."
                  rows={6}
                  required
                />
                <p className="text-sm text-gray-600 mt-1">Nên viết từ góc nhìn của khách hàng, chân thực và cụ thể</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt testimonial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="status">Trạng thái</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="pending">Chờ duyệt</option>
                  <option value="published">Đã xuất bản</option>
                  <option value="hidden">Ẩn</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="featured">Testimonial nổi bật</Label>
                  <p className="text-sm text-gray-600">Hiển thị ở trang chủ</p>
                </div>
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleInputChange("featured", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Xem trước</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg mr-3">
                    👤
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{formData.name || "Tên khách hàng"}</h4>
                    <p className="text-sm text-gray-600">{formData.location || "Địa chỉ"}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= formData.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic text-sm">
                  "{formData.comment || "Nội dung đánh giá sẽ hiển thị ở đây..."}"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Lưu testimonial
            </Button>
            <Button type="button" variant="outline" className="w-full">
              Lưu nháp
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
