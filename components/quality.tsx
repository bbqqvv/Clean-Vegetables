import { Shield, Droplets, Sun, Heart } from "lucide-react"

export function Quality() {
  const commitments = [
    {
      icon: Shield,
      title: "100% Không Thuốc Trừ Sâu",
      description: "Chúng tôi cam kết không sử dụng bất kỳ loại thuốc trừ sâu nào trong quá trình canh tác",
    },
    {
      icon: Droplets,
      title: "Nước Giếng Sạch",
      description: "Tưới nước bằng nguồn nước giếng khoan sạch, đảm bảo chất lượng tốt nhất cho cây trồng",
    },
    {
      icon: Sun,
      title: "Phân Hữu Cơ Tự Nhiên",
      description: "Sử dụng phân hữu cơ từ phế phẩm nông nghiệp, không dùng phân hóa học",
    },
    {
      icon: Heart,
      title: "Thu Hoạch Hàng Ngày",
      description: "Rau được thu hoạch vào sáng sớm, đảm bảo độ tươi ngon và dinh dưỡng cao nhất",
    },
  ]

  return (
    <section id="quality" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Cam Kết Chất Lượng</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những cam kết của chúng tôi để mang đến sản phẩm rau sạch tốt nhất cho gia đình bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {commitments.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Đảm Bảo Hoàn Tiền 100%</h3>
          <p className="text-lg mb-6">
            Nếu bạn không hài lòng với chất lượng sản phẩm, chúng tôi cam kết hoàn tiền 100%
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center">
              <span className="text-2xl mr-2">✅</span>
              <span>Tươi ngon đảm bảo</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✅</span>
              <span>Giao hàng tận nơi</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✅</span>
              <span>Giá cả hợp lý</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
