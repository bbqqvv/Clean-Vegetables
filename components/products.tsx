import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Products() {
  const products = [
    {
      name: "Rau Cải Xanh",
      price: "15,000đ/kg",
      description: "Cải xanh tươi ngon, giòn ngọt, thu hoạch hàng ngày",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Rau Muống",
      price: "12,000đ/kg",
      description: "Rau muống non, sạch, không hóa chất",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Xà Lách",
      price: "20,000đ/kg",
      description: "Xà lách giòn, ngọt nước, lá xanh tươi",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Cà Chua",
      price: "25,000đ/kg",
      description: "Cà chua chín tự nhiên, ngọt thanh, đỏ đều",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Dưa Leo",
      price: "18,000đ/kg",
      description: "Dưa leo giòn, tươi mát, không đắng",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Rau Thơm",
      price: "30,000đ/kg",
      description: "Hành lá, ngò, húng quế... tươi thơm",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Sản Phẩm Rau Sạch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đa dạng các loại rau củ tươi ngon, được thu hoạch hàng ngày từ vườn nhà
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
                  <span className="text-lg font-bold text-green-600">{product.price}</span>
                </div>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center text-sm text-green-600">
                  <span className="mr-2">🌿</span>
                  <span>Tươi sạch • Không thuốc trừ sâu</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            <strong>Lưu ý:</strong> Giá có thể thay đổi theo mùa vụ và thời điểm thu hoạch
          </p>
          <p className="text-green-700 font-medium">
            📞 Liên hệ đặt hàng: <strong>0987 123 456</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
