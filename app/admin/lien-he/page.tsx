import { ContactManagement } from "@/components/admin/contact-management"

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Liên Hệ</h1>
          <p className="text-gray-600">Xem và trả lời tin nhắn từ khách hàng</p>
        </div>
      </div>

      <ContactManagement />
    </div>
  )
}
