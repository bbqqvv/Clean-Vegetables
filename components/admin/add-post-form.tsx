"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Save, Upload, X, Plus, Eye } from "lucide-react"
import NextImage from "next/image"

export function AddPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Bác Năm - Chủ vườn",
    tags: [] as string[],
    status: "draft",
    featured: false,
    image: "",
  })

  const [newTag, setNewTag] = useState("")

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Auto generate slug from title
    if (field === "title" && typeof value === "string") {
      const slug = value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()

      setFormData((prev) => ({
        ...prev,
        slug: slug,
      }))
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting post:", formData)
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nội dung bài viết</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Tiêu đề bài viết *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="VD: Bí Quyết Trồng Rau Cải Xanh Tươi Ngon"
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">Đường dẫn (Slug)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                  placeholder="bi-quyet-trong-rau-cai-xanh"
                />
                <p className="text-sm text-gray-600 mt-1">URL: /cau-chuyen/{formData.slug}</p>
              </div>

              <div>
                <Label htmlFor="excerpt">Tóm tắt *</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  placeholder="Tóm tắt ngắn gọn về nội dung bài viết..."
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="content">Nội dung bài viết *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  placeholder="Viết nội dung chi tiết của bài viết..."
                  rows={15}
                  required
                />
                <p className="text-sm text-gray-600 mt-1">
                  Hỗ trợ HTML cơ bản: &lt;p&gt;, &lt;h3&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;
                </p>
              </div>

              {/* Tags */}
              <div>
                <Label>Tags</Label>
                <div className="flex space-x-2 mt-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="VD: Kinh nghiệm"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ml-1 hover:text-red-600">
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
          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle>Hình ảnh đại diện</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {formData.image ? (
                  <div className="relative aspect-video">
                    <NextImage
                      src={formData.image || "/placeholder.svg"}
                      alt="Post preview"
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

          {/* Post Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt bài viết</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="author">Tác giả</Label>
                <select
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="Bác Năm - Chủ vườn">Bác Năm - Chủ vườn</option>
                  <option value="Cô Sáu">Cô Sáu</option>
                </select>
              </div>

              <div>
                <Label htmlFor="status">Trạng thái</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="draft">Bản nháp</option>
                  <option value="published">Xuất bản</option>
                </select>
              </div>

              <div className="pt-4">
                <Button type="button" variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  Xem trước
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              {formData.status === "published" ? "Xuất bản" : "Lưu bản nháp"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => handleInputChange("status", formData.status === "published" ? "draft" : "published")}
            >
              {formData.status === "published" ? "Chuyển về nháp" : "Xuất bản ngay"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
