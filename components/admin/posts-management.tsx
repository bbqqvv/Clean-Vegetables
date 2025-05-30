"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

export function PostsManagement() {
  const [posts] = useState([
    {
      id: 1,
      title: "Buổi Sáng 4h30 Trong Vườn Rau",
      slug: "buoi-sang-4h30-trong-vuon-rau",
      author: "Bác Năm",
      date: "25/01/2024",
      status: "published",
      views: 245,
    },
    {
      id: 2,
      title: "Bí Quyết Trồng Rau Cải Xanh Tươi Ngon",
      slug: "bi-quyet-trong-rau-cai-xanh",
      author: "Bác Năm",
      date: "20/01/2024",
      status: "published",
      views: 189,
    },
    {
      id: 3,
      title: "Tại Sao Nên Chọn Rau Không Thuốc Trừ Sâu?",
      slug: "tai-sao-nen-chon-rau-khong-thuoc-tru-sau",
      author: "Cô Sáu",
      date: "18/01/2024",
      status: "draft",
      views: 0,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Đã xuất bản</Badge>
      case "draft":
        return <Badge variant="secondary">Bản nháp</Badge>
      default:
        return <Badge variant="outline">Không xác định</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Danh sách bài viết</h2>
          <p className="text-gray-600">Quản lý tất cả bài viết trên website</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700" asChild>
          <Link href="/admin/bai-viet/them-moi">
            <Plus className="w-4 h-4 mr-2" />
            Thêm bài viết
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bài viết gần đây</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{post.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>Tác giả: {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.views} lượt xem</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {getStatusBadge(post.status)}

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
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
