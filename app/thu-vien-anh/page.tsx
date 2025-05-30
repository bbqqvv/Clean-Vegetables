import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Thư Viện Hình Ảnh</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá vườn rau xanh tươi của chúng tôi qua những hình ảnh chân thực, từ quá trình chăm sóc đến thu
              hoạch
            </p>
          </div>
        </div>
      </section>

      <ImageGallery />
      <Footer />
    </div>
  )
}
