import { AddProductForm } from "@/components/admin/add-product-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AddProductPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link
          href="/admin/san-pham"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại danh sách
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">Thêm Sản Phẩm Mới</h1>
        <p className="text-gray-600">Tạo sản phẩm rau mới cho danh mục</p>
      </div>

      <AddProductForm />
    </div>
  )
}
