import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPosts } from "@/components/blog-posts"
import Image from "next/image"

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Nhật Ký Vườn Rau</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những câu chuyện thường ngày từ vườn rau, kinh nghiệm canh tác và hành trình mang rau sạch đến mọi gia
              đình
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Buổi sáng trong vườn rau"
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>📅 25/01/2024</span>
                  <span className="mx-2">•</span>
                  <span>👨‍🌾 Bác Năm - Chủ vườn</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Buổi Sáng 4h30 Trong Vườn Rau</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Hôm nay tôi muốn chia sẻ với các bạn về một ngày làm việc thường ngày của gia đình tôi. Đồng hồ báo
                    thức reo lúc 4h15 sáng, nhưng thực ra tôi đã thức từ lúc 4h rồi. Sau 20 năm làm nghề, cơ thể đã quen
                    với nhịp sống này.
                  </p>
                  <p>
                    4h30 sáng, tôi và vợ đã có mặt tại vườn. Không khí trong lành, sương mai còn đọng trên lá rau. Đây
                    là thời điểm tốt nhất để thu hoạch vì rau còn tươi ngon, giữ được độ ẩm tự nhiên.
                  </p>
                  <p>
                    Công việc đầu tiên là kiểm tra hệ thống tưới nước. Chúng tôi sử dụng nước giếng khoan sạch, được
                    kiểm tra định kỳ để đảm bảo chất lượng. Sau đó là thu hoạch những loại rau đã đến độ tuổi.
                  </p>
                  <p>
                    6h sáng, chúng tôi chở rau tươi ra chợ Gò Quao. Những khách hàng quen thuộc đã chờ sẵn. Cô Lan -
                    khách hàng 10 năm nay luôn nói: "Rau nhà bác Năm tươi nhất chợ, ăn ngọt lắm!"
                  </p>
                  <p>Đó là niềm hạnh phúc lớn nhất của chúng tôi - được khách hàng tin tưởng và yêu mến.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <BlogPosts />
      <Footer />
    </div>
  )
}
