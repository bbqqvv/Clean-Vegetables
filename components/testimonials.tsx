import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Chị Lan Anh",
      location: "Gò Quao, Kiên Giang",
      rating: 5,
      comment: "Mua rau của bác Năm được 3 năm rồi, rau luôn tươi ngon và sạch. Con em ăn rau nhiều hơn hẳn!",
      avatar: "👩",
    },
    {
      name: "Anh Minh Tuấn",
      location: "Rạch Giá, Kiên Giang",
      rating: 5,
      comment: "Chất lượng rau rất tốt, giao hàng đúng giờ. Gia đình tôi chỉ mua rau của bác thôi.",
      avatar: "👨",
    },
    {
      name: "Cô Hương",
      location: "Gò Quao, Kiên Giang",
      rating: 5,
      comment: "Bác Năm và cô Sáu rất tận tình, rau sạch thật sự. Giá cả hợp lý, sẽ giới thiệu cho bạn bè.",
      avatar: "👵",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Khách Hàng Nói Gì?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những phản hồi chân thực từ khách hàng đã sử dụng sản phẩm của chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
