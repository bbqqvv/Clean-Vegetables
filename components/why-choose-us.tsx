import { Shield, Heart, Truck, Award } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "An Toàn Tuyệt Đối",
      description: "100% không thuốc trừ sâu, sử dụng phân hữu cơ và nước giếng sạch",
    },
    {
      icon: Heart,
      title: "Tình Yêu Trong Từng Sản Phẩm",
      description: "Chăm sóc từng cây rau như con em, với 20+ năm kinh nghiệm",
    },
    {
      icon: Truck,
      title: "Giao Hàng Tận Nơi",
      description: "Giao hàng tận nhà trong bán kính 10km, đảm bảo độ tươi ngon",
    },
    {
      icon: Award,
      title: "Uy Tín Được Khẳng Định",
      description: "Được hàng nghìn khách hàng tin tưởng và lựa chọn",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Tại Sao Chọn Chúng Tôi?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những cam kết và giá trị mà chúng tôi mang lại cho khách hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
