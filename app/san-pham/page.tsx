import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductCategories } from "@/components/product-categories"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Sản Phẩm Rau Sạch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Đa dạng các loại rau củ tươi ngon, được thu hoạch hàng ngày từ vườn nhà. Tất cả đều được trồng theo phương
              pháp tự nhiên, không sử dụng thuốc trừ sâu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">🌿 100% Tự Nhiên</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">🚫 Không Thuốc Trừ Sâu</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">🌅 Thu Hoạch Hàng Ngày</span>
            </div>
          </div>
        </div>
      </section>

      <ProductCategories />
      <ProductGrid />

      {/* Contact CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Muốn Đặt Hàng?</h2>
          <p className="text-xl mb-8">Liên hệ ngay để được tư vấn và báo giá chi tiết</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel: 0966467356"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Gọi: 0966467356
            </a>
            <a
              href="https://zalo.me/0966467356"
              className="bg-blue-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              💬 Chat Zalo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
