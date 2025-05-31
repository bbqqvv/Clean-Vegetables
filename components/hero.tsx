"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
              Rau Sạch Tự Nhiên
              <span className="block text-green-600">Từ Vườn Nhà</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Chúng tôi là gia đình nông dân tại Ninh Hòa, với hơn 30 năm kinh nghiệm trồng rau sạch. Mỗi ngày, chúng
              tôi chăm sóc vườn rau bằng tình yêu và tâm huyết, mang đến cho bạn những sản phẩm tươi ngon, an toàn nhất.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">🌿 100% Tự Nhiên</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                🚫 Không Thuốc Trừ Sâu
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                🌅 Thu Hoạch Hàng Ngày
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Đặt hàng: 0966467356
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
                <Link href="/san-pham">
                  Xem sản phẩm
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/hero-image.png"
              alt="Vườn rau sạch tươi xanh"
              width={700}
              height={600}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-semibold text-green-800">30+ Năm Kinh Nghiệm</p>
                  <p className="text-sm text-gray-600">Được khách hàng tin tưởng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
