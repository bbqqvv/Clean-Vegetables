"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Save, Upload, X, Plus } from "lucide-react"
import NextImage from "next/image"

export function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    features: [] as string[],
    status: "active",
    featured: false,
    image: "",
  })

  const [newFeature, setNewFeature] = useState("")

  const categories = ["Rau lá xanh", "Rau củ quả", "Rau thơm", "Rau theo mùa"]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }))
      setNewFeature("")
    }
  }

  const removeFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((f) => f !== feature),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting product:", formData)
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin sản phẩm</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Tên sản phẩm *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="VD: Rau Cải Xanh"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Danh mục *</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Chọn danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="description">Mô tả sản phẩm *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Mô tả chi tiết về sản phẩm..."
                  rows={4}
                  required
                />
              </div>

              {/* Features */}
              <div>
                <Label>Đặc điểm nổi bật</Label>
                <div className="flex space-x-2 mt-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="VD: Giòn ngọt"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                  />
                  <Button type="button" onClick={addFeature} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {formData.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {feature}
                        <button
                          type="button"
                          onClick={() => removeFeature(feature)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Image Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Hình ảnh sản phẩm</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {formData.image ? (
                  <div className="relative aspect-square">
                    <NextImage
                      src={formData.image || "/placeholder.svg"}
                      alt="Product preview"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleInputChange("image", "")}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click để upload hình ảnh</p>
                  </div>
                )}

                <Button type="button" variant="outline" className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Chọn hình ảnh
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt</CardTitle>
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
                  <option value="active">Đang bán</option>
                  <option value="inactive">Tạm ngưng</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="featured">Sản phẩm nổi bật</Label>
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

          {/* Actions */}
          <div className="space-y-3">
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Lưu sản phẩm
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
