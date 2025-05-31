"use client"

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Liên Hệ Đặt Hàng</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để đặt hàng hoặc tìm hiểu thêm về sản phẩm rau sạch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">Thông Tin Liên Hệ</h3>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Số điện thoại</h4>
                      <p className="text-lg font-bold text-green-600">0987 123 456</p>
                      <p className="text-sm text-gray-600">Gọi trực tiếp để đặt hàng</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Zalo</h4>
                      <p className="text-lg font-bold text-green-600">0987 123 456</p>
                      <p className="text-sm text-gray-600">Chat trực tiếp qua Zalo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Địa chỉ</h4>
                      <p className="text-gray-700">Xã Vĩnh Hiệp</p>
                      <p className="text-gray-700">Huyện Gò Quao, Tỉnh Kiên Giang</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Giờ làm việc</h4>
                      <p className="text-gray-700">Thứ 2 - Chủ nhật: 5:00 - 18:00</p>
                      <p className="text-sm text-gray-600">Có mặt tại chợ Gò Quao từ 6:00 - 10:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">Đặt Hàng Ngay</h3>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📱</span>
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Liên hệ đặt hàng</h4>
                <p className="text-gray-600">Chọn cách liên hệ phù hợp với bạn</p>
              </div>

              <div className="space-y-4">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  onClick={() => window.open("tel:0987123456")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Gọi điện: 0987 123 456
                </Button>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-green py-3 text-lg"
                  onClick={() => window.open("https://zalo.me/0987123456")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Zalo
                </Button>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">💡 Lưu ý khi đặt hàng:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Đặt hàng trước 17:00 để nhận hàng sáng hôm sau</li>
                  <li>• Giao hàng tận nơi trong bán kính 10km</li>
                  <li>• Đơn hàng tối thiểu 50,000đ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
