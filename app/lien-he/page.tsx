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
            <p className="text-gray-600">Ninh Đa - Ninh Hòa - Khánh Hòa</p>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3524.9610183435752!2d109.13587507615085!3d12.502320193488941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDMwJzA4LjMiTiAxMDnCsDA4JzI2LjciRQ!5e1!3m2!1svi!2s!4v1748679205858!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section >

      <Footer />
    </div >
  )
}
