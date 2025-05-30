import { AddPostForm } from "@/components/admin/add-post-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AddPostPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link
          href="/admin/bai-viet"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại danh sách
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tạo Bài Viết Mới</h1>
        <p className="text-gray-600">Viết câu chuyện mới cho blog</p>
      </div>

      <AddPostForm />
    </div>
  )
}
