import { PostsManagement } from "@/components/admin/posts-management"

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Bài Viết</h1>
          <p className="text-gray-600">Tạo và quản lý các bài viết blog, câu chuyện</p>
        </div>
      </div>

      <PostsManagement />
    </div>
  )
}
