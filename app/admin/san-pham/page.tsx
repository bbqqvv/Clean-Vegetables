import { ProductsManagement } from "@/components/admin/products-management"

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Sản Phẩm</h1>
          <p className="text-gray-600">Thêm, sửa, xóa các loại rau trong danh mục</p>
        </div>
      </div>

      <ProductsManagement />
    </div>
  )
}
