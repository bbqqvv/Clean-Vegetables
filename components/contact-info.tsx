import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Điện thoại",
      value: "0987 123 456",
      description: "Gọi trực tiếp để đặt hàng",
      action: "tel:0987123456",
    },
    {
      icon: MessageCircle,
      title: "Zalo",
      value: "0987 123 456",
      description: "Chat trực tiếp qua Zalo",
      action: "https://zalo.me/0987123456",
    },
    {
      icon: Mail,
      title: "Email",
      value: "xalachninhhoa.giadinh@gmail.com",
      description: "Gửi email cho chúng tôi",
      action: "mailto:xalachninhhoa.giadinh@gmail.com",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-6">Thông Tin Liên Hệ</h2>

      <div className="space-y-6 mb-8">
        {contactMethods.map((method, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-800">{method.title}</h3>
                  <p className="text-lg font-bold text-green-600">{method.value}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
                <a
                  href={method.action}
                  className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Liên hệ
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Address & Hours */}
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Địa chỉ</h3>
                <p className="text-gray-700">Xã Vĩnh Hiệp</p>
                <p className="text-gray-700">Huyện Gò Quao, Tỉnh Kiên Giang</p>
                <p className="text-sm text-gray-600 mt-2">📍 Có mặt tại chợ Gò Quao từ 6:00 - 10:00 hàng ngày</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Giờ làm việc</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Thứ 2 - Chủ nhật: 5:00 - 18:00</p>
                  <p className="text-sm text-gray-600">
                    🌅 Thu hoạch: 5:00 - 7:00
                    <br />🏪 Bán tại chợ: 6:00 - 10:00
                    <br />📞 Nhận đặt hàng: 5:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
