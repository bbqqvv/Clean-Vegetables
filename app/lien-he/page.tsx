import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hãy liên hệ để đặt hàng, tư vấn hoặc tìm hiểu thêm về sản phẩm rau sạch của gia đình chúng tôi
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Vị Trí Vườn Rau</h2>
            <p className="text-gray-600">Xã Vĩnh Hiệp, Huyện Gò Quao, Tỉnh Kiên Giang</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-semibold">Bản đồ vị trí vườn rau</p>
                <p className="text-sm">Xã Vĩnh Hiệp, Huyện Gò Quao, Tỉnh Kiên Giang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
