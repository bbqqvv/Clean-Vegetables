import { TestimonialsManagement } from "@/components/admin/testimonials-management"

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Testimonials</h1>
          <p className="text-gray-600">Quản lý đánh giá và phản hồi từ khách hàng</p>
        </div>
      </div>

      <TestimonialsManagement />
    </div>
  )
}
