"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn Sàng Đặt Rau Sạch Cho Gia Đình?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Liên hệ ngay với chúng tôi để được tư vấn và đặt hàng. Cam kết giao hàng tươi ngon trong ngày!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100"
            onClick={() => window.open("tel: 096646756")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Gọi ngay: 0987 123 456
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-green-600 hover:bg-gray-100"
            onClick={() => window.open("https://zalo.me/0966467356")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat Zalo
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            <span>Giao hàng tận nơi</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            <span>Tươi ngon đảm bảo</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            <span>Giá cả hợp lý</span>
          </div>
        </div>
      </div>
    </section>
  )
}
