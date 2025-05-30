import { ImageManagement } from "@/components/admin/image-management"

export default function ImagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Hình Ảnh</h1>
          <p className="text-gray-600">Upload và quản lý thư viện hình ảnh</p>
        </div>
      </div>

      <ImageManagement />
    </div>
  )
}
