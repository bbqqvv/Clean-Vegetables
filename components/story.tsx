import Image from "next/image"

export function Story() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Câu Chuyện Gia Đình</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hành trình 20 năm gắn bó với đất và cây trồng của gia đình chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Ba mẹ đang chăm sóc vườn rau"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">Tình Yêu Với Đất Và Cây Trồng</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Ba mẹ tôi bắt đầu nghề trồng rau từ năm 2004, với mảnh vườn nhỏ sau nhà. Từ những ngày đầu khó khăn, hai
                ông bà đã kiên trì học hỏi, tích lũy kinh nghiệm để có được vườn rau xanh tươi như hôm nay.
              </p>
              <p>
                Mỗi sáng 4h30, ba mẹ đã có mặt tại vườn để tưới nước, chăm sóc cây trồng. Sau khi thu hoạch, họ chở rau
                tươi ra chợ Gò Quao để bán cho bà con địa phương. Sự tận tâm và chất lượng sản phẩm đã giúp gia đình có
                được niềm tin từ khách hàng.
              </p>
              <p>
                <strong className="text-green-700">
                  "Trồng rau không chỉ là nghề, mà còn là tình yêu với thiên nhiên và trách nhiệm với sức khỏe cộng
                  đồng"
                </strong>{" "}
                - đó là phương châm mà ba mẹ tôi luôn theo đuổi.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="text-xl font-semibold text-green-800 mb-2">20+ Năm Kinh Nghiệm</h4>
            <p className="text-gray-600">Tích lũy kiến thức và kỹ thuật canh tác qua nhiều năm</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">❤️</span>
            </div>
            <h4 className="text-xl font-semibold text-green-800 mb-2">Tình Yêu Nghề Nghiệp</h4>
            <p className="text-gray-600">Chăm sóc từng cây rau như chăm sóc con em trong gia đình</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h4 className="text-xl font-semibold text-green-800 mb-2">Uy Tín Với Khách Hàng</h4>
            <p className="text-gray-600">Xây dựng niềm tin qua chất lượng và sự chân thành</p>
          </div>
        </div>
      </div>
    </section>
  )
}
