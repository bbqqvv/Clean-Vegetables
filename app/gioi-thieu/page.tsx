import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Câu Chuyện Của Chúng Tôi</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hành trình 20 năm gắn bó với đất và cây trồng, từ những ngày đầu khó khăn đến niềm tin của hàng nghìn
              khách hàng
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/images/cauchuyen.png"
                alt="Ba mẹ bên vườn rau"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Khởi Đầu Từ Tình Yêu Đất</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Năm 2004, với đôi tay trần và tấm lòng yêu thiên nhiên, ba mẹ tôi bắt đầu canh tác trên mảnh đất nhỏ
                  sau nhà tại xã Ninh Hòa. Những ngày đầu, không có kinh nghiệm, không có máy móc, chỉ có sự kiên trì
                  và niềm tin vào con đường mình đã chọn.
                </p>
                <p>
                  Từ việc trồng vài luống rau để bán ở chợ địa phương, đến nay gia đình đã có vườn rau rộng 2 hecta,
                  cung cấp rau sạch cho hàng trăm gia đình trong vùng. Mỗi cây rau đều được chăm sóc như con em trong
                  nhà.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Hành Trình Phát Triển</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2004
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Khởi Đầu Với Ước Mơ</h3>
                  <p className="text-gray-700">Bắt đầu trồng rau trên mảnh đất 500m², bán tại chợ Gò Quao</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2010
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Mở Rộng Quy Mô</h3>
                  <p className="text-gray-700">Thuê thêm đất, mở rộng lên 1 hecta, bắt đầu có khách hàng thân thiết</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2018
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Chứng Nhận Rau Sạch</h3>
                  <p className="text-gray-700">Được cơ quan chức năng công nhận là cơ sở sản xuất rau an toàn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Hiện Đại Hóa</h3>
                  <p className="text-gray-700">
                    Ra mắt website, mở rộng kênh bán hàng online, phục vụ nhiều khách hàng hơn
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Tình Yêu Thiên Nhiên</h3>
              <p className="text-gray-700">
                Chúng tôi yêu đất, yêu cây và luôn tôn trọng quy luật tự nhiên trong canh tác
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Uy Tín Là Vàng</h3>
              <p className="text-gray-700">20 năm xây dựng niềm tin với khách hàng bằng chất lượng và sự chân thành</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Sức Khỏe Cộng Đồng</h3>
              <p className="text-gray-700">Sứ mệnh mang rau sạch, an toàn đến mọi gia đình Việt Nam</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
