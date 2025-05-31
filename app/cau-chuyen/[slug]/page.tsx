import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedPosts } from "@/components/related-posts"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - trong thực tế sẽ fetch từ database
const getPostBySlug = (slug: string) => {
  const posts = {
    "buoi-sang-4h30-trong-vuon-rau": {
      title: "Buổi Sáng 4h30 Trong Vườn Rau",
      slug: "buoi-sang-4h30-trong-vuon-rau",
      excerpt: "Hôm nay tôi muốn chia sẻ với các bạn về một ngày làm việc thường ngày của gia đình tôi...",
      content: `
        <p>Hôm nay tôi muốn chia sẻ với các bạn về một ngày làm việc thường ngày của gia đình tôi. Đồng hồ báo thức reo lúc 4h15 sáng, nhưng thực ra tôi đã thức từ lúc 4h rồi. Sau 20 năm làm nghề, cơ thể đã quen với nhịp sống này.</p>

        <p>4h30 sáng, tôi và vợ đã có mặt tại vườn. Không khí trong lành, sương mai còn đọng trên lá rau. Đây là thời điểm tốt nhất để thu hoạch vì rau còn tươi ngon, giữ được độ ẩm tự nhiên.</p>

        <h3>Công việc đầu tiên: Kiểm tra hệ thống tưới</h3>
        <p>Chúng tôi sử dụng nước giếng khoan sạch, được kiểm tra định kỳ để đảm bảo chất lượng. Hệ thống tưới nhỏ giọt giúp tiết kiệm nước và đảm bảo cây trồng được tưới đều.</p>

        <p>Sau đó là thu hoạch những loại rau đã đến độ tuổi. Rau cải xanh thường thu hoạch sau 25-30 ngày gieo trồng, rau muống sau 20-25 ngày. Chúng tôi chỉ cắt những cây đã đủ lớn, để lại những cây nhỏ tiếp tục phát triển.</p>

        <h3>6h sáng: Ra chợ Gò Quao</h3>
        <p>6h sáng, chúng tôi chở rau tươi ra chợ Gò Quao. Những khách hàng quen thuộc đã chờ sẵn. Cô Lan - khách hàng 10 năm nay luôn nói: "Rau nhà bác Năm tươi nhất chợ, ăn ngọt lắm!"</p>

        <p>Việc bán hàng tại chợ không chỉ là thu nhập mà còn là cơ hội để chúng tôi lắng nghe phản hồi từ khách hàng. Họ thích loại rau nào, muốn chúng tôi trồng thêm gì, tất cả đều được ghi nhận và cải thiện.</p>

        <h3>Buổi chiều: Chuẩn bị cho ngày mai</h3>
        <p>Buổi chiều, chúng tôi chuẩn bị đất cho vụ mới, bón phân hữu cơ, và gieo hạt. Mỗi ngày đều phải có công việc chuẩn bị để đảm bảo nguồn cung liên tục.</p>

        <p>Đó là niềm hạnh phúc lớn nhất của chúng tôi - được khách hàng tin tưởng và yêu mến. Mỗi ngày đều là một ngày mới với những thử thách và niềm vui riêng.</p>
      `,
      author: "Bác Năm - Chủ vườn",
      date: "25/01/2024",
      readTime: "8 phút đọc",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["Kinh nghiệm", "Nhật ký vườn", "Thu hoạch"],
    },
    "bi-quyet-trong-rau-cai-xanh": {
      title: "Bí Quyết Trồng Rau Cải Xanh Tươi Ngon",
      slug: "bi-quyet-trong-rau-cai-xanh",
      excerpt: "Chia sẻ kinh nghiệm 20 năm trồng rau cải xanh, từ khâu chuẩn bị đất đến thu hoạch...",
      content: `
        <p>Rau cải xanh là một trong những loại rau được ưa chuộng nhất tại vườn nhà chúng tôi. Sau 20 năm kinh nghiệm, tôi muốn chia sẻ những bí quyết để có được những cây cải xanh tươi ngon, giòn ngọt.</p>

        <h3>1. Chuẩn bị đất trồng</h3>
        <p>Đất trồng cải xanh cần tơi xốp, thoát nước tốt và giàu chất hữu cơ. Chúng tôi thường:</p>
        <ul>
          <li>Cày xới đất sâu 20-25cm</li>
          <li>Bón phân hữu cơ (phân chuồng đã ủ kỹ) với liều lượng 2-3 tấn/ha</li>
          <li>Làm luống cao 15-20cm để thoát nước tốt</li>
          <li>Để đất nghỉ 7-10 ngày trước khi gieo</li>
        </ul>

        <h3>2. Chọn giống và gieo trồng</h3>
        <p>Chúng tôi chọn giống cải xanh địa phương, thích nghi tốt với khí hậu Kiên Giang:</p>
        <ul>
          <li>Gieo trực tiếp xuống luống với khoảng cách 15x15cm</li>
          <li>Mỗi hốc gieo 2-3 hạt, sau đó tỉa bỏ cây yếu</li>
          <li>Độ sâu gieo: 0.5-1cm</li>
          <li>Tưới nước nhẹ sau khi gieo</li>
        </ul>

        <h3>3. Chăm sóc trong quá trình sinh trưởng</h3>
        <p><strong>Tưới nước:</strong> Tưới 2 lần/ngày vào sáng sớm và chiều mát. Tránh tưới vào trưa nắng gắt.</p>
        
        <p><strong>Bón phân:</strong> Sau 10 ngày gieo, bón phân hữu cơ lỏng pha loãng. Lặp lại mỗi 7-10 ngày.</p>
        
        <p><strong>Làm cỏ:</strong> Thường xuyên làm cỏ và xới đất nhẹ quanh gốc cây.</p>

        <h3>4. Phòng trừ sâu bệnh tự nhiên</h3>
        <p>Thay vì sử dụng thuốc trừ sâu, chúng tôi áp dụng các biện pháp tự nhiên:</p>
        <ul>
          <li>Trồng xen các loại cây thơm như húng quế, kinh giới để đuổi sâu</li>
          <li>Sử dụng bẫy đèn để bắt sâu đêm</li>
          <li>Phun nước tỏi, ớt pha loãng để phòng trừ rệp</li>
          <li>Luân canh với các loại cây khác để cắt chu kỳ sâu bệnh</li>
        </ul>

        <h3>5. Thu hoạch đúng thời điểm</h3>
        <p>Cải xanh thường thu hoạch sau 25-30 ngày gieo trồng, khi:</p>
        <ul>
          <li>Lá đã xanh đậm, dày và giòn</li>
          <li>Cây cao khoảng 15-20cm</li>
          <li>Thu hoạch vào sáng sớm (5-7h) để giữ độ tươi</li>
          <li>Cắt sát gốc, rửa sạch và để ráo nước</li>
        </ul>

        <p>Với những kinh nghiệm này, gia đình chúng tôi luôn có được những vụ cải xanh chất lượng cao, được khách hàng ưa chuộng. Hy vọng những chia sẻ này sẽ hữu ích cho những ai muốn trồng rau sạch tại nhà.</p>
      `,
      author: "Bác Năm - Chủ vườn",
      date: "20/01/2024",
      readTime: "10 phút đọc",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["Kỹ thuật", "Rau cải", "Hướng dẫn"],
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy bài viết</h1>
          <Link href="/cau-chuyen" className="text-green-600 hover:text-green-700">
            ← Quay lại trang câu chuyện
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/cau-chuyen"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại câu chuyện
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Chia sẻ
                </Button>
              </div>
            </div>

            <div className="relative aspect-video mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-green-50 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">
                  👨‍🌾
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Về tác giả</h3>
                  <p className="text-gray-700">
                    <strong>Bác Năm (Nguyễn Văn Thành)</strong> - Chủ vườn rau sạch với hơn 20 năm kinh nghiệm. Bác luôn
                    sẵn sàng chia sẻ kiến thức và kinh nghiệm canh tác với mọi người.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Muốn Đặt Rau Sạch?</h3>
              <p className="mb-6">Liên hệ ngay với chúng tôi để được tư vấn và đặt hàng</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-green-600 hover:bg-gray-100">📞 Gọi: 0987 123 456</Button>
                <Button variant="outline" className="border-white text-green-600 hover:bg-white hover:text-green-600">
                  💬 Chat Zalo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <RelatedPosts currentSlug={post.slug} />
      <Footer />
    </div>
  )
}
