import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const featuredProducts = [
    {
      name: "Rau Cải Xanh",
      description: "Tươi ngon, giòn ngọt, thu hoạch hàng ngày",
      image: "/placeholder.svg?height=250&width=350",
      badge: "Bán chạy nhất",
    },
    {
      name: "Cà Chua",
      description: "Chín tự nhiên, ngọt thanh, đỏ đều",
      image: "/placeholder.svg?height=250&width=350",
      badge: "Tươi ngon",
    },
    {
      name: "Rau Thơm",
      description: "Ngò, húng quế, hành lá... đa dạng loại",
      image: "/placeholder.svg?height=250&width=350",
      badge: "Thơm tự nhiên",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Sản Phẩm Nổi Bật</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những loại rau được khách hàng yêu thích nhất, tươi ngon và an toàn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">Liên hệ giá</span>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Đặt hàng
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            <Link href="/san-pham">Xem tất cả sản phẩm</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
