import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProductGrid() {
  const products = [
    {
      name: "Rau Cải Xanh",
      description: "Cải xanh tươi ngon, giòn ngọt, thu hoạch hàng ngày. Lá xanh đậm, không sâu bệnh.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Giòn ngọt", "Thu hoạch sáng", "Không thuốc trừ sâu"],
    },
    {
      name: "Rau Muống",
      description: "Rau muống non, sạch, không hóa chất. Thân giòn, lá xanh tươi mát.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Rau muống non", "Thân giòn", "Lá xanh tươi"],
    },
    {
      name: "Xà Lách",
      description: "Xà lách giòn, ngọt nước, lá xanh tươi. Thích hợp làm salad và ăn sống.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Giòn ngọt", "Ăn sống được", "Lá dày"],
    },
    {
      name: "Cà Chua",
      description: "Cà chua chín tự nhiên, ngọt thanh, đỏ đều. Không sử dụng chất tăng trưởng.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Chín tự nhiên", "Ngọt thanh", "Đỏ đều"],
    },
    {
      name: "Dưa Leo",
      description: "Dưa leo giòn, tươi mát, không đắng. Vỏ xanh đều, thịt trắng giòn.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Giòn mát", "Không đắng", "Vỏ xanh đều"],
    },
    {
      name: "Ớt Sừng",
      description: "Ớt sừng cay vừa phải, thơm ngon. Quả to, thịt dày, màu đỏ tự nhiên.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Cay vừa", "Thịt dày", "Màu đỏ tự nhiên"],
    },
    {
      name: "Hành Lá",
      description: "Hành lá tươi thơm, lá xanh non. Thích hợp làm gia vị và trang trí món ăn.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Tươi thơm", "Lá xanh non", "Đa dụng"],
    },
    {
      name: "Rau Thơm",
      description: "Ngò, húng quế, kinh giới... đa dạng loại rau thơm tươi ngon.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Đa dạng loại", "Thơm tự nhiên", "Tươi mỗi ngày"],
    },
    {
      name: "Rau Dền",
      description: "Rau dền đỏ và xanh, lá non mềm, giàu dinh dưỡng. Thích hợp nấu canh.",
      image: "/placeholder.svg?height=250&width=350",
      features: ["Lá non mềm", "Giàu dinh dưỡng", "Hai màu"],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Tươi sạch
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

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
      </div>
    </section>
  )
}
