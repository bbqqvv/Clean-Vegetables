import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function BlogPosts() {
  const posts = [
    {
      title: "Bí Quyết Trồng Rau Cải Xanh Tươi Ngon",
      slug: "bi-quyet-trong-rau-cai-xanh",
      excerpt: "Chia sẻ kinh nghiệm 20 năm trồng rau cải xanh, từ khâu chuẩn bị đất đến thu hoạch...",
      date: "20/01/2024",
      author: "Bác Năm",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 phút đọc",
    },
    {
      title: "Tại Sao Nên Chọn Rau Không Thuốc Trừ Sâu?",
      slug: "tai-sao-nen-chon-rau-khong-thuoc-tru-sau",
      excerpt: "Những tác hại của thuốc trừ sâu đối với sức khỏe và lợi ích của rau sạch tự nhiên...",
      date: "18/01/2024",
      author: "Cô Sáu",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 phút đọc",
    },
    {
      title: "Hành Trình Từ Hạt Giống Đến Bàn Ăn",
      slug: "hanh-trinh-tu-hat-giong-den-ban-an",
      excerpt: "Theo dõi quá trình phát triển của một cây rau từ khi gieo hạt cho đến khi thu hoạch...",
      date: "15/01/2024",
      author: "Bác Năm",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 phút đọc",
    },
    {
      title: "Mùa Mưa - Thách Thức Của Người Trồng Rau",
      slug: "mua-mua-thach-thuc-cua-nguoi-trong-rau",
      excerpt: "Những khó khăn trong mùa mưa và cách chúng tôi bảo vệ vườn rau khỏi thời tiết xấu...",
      date: "12/01/2024",
      author: "Cô Sáu",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "4 phút đọc",
    },
    {
      title: "Phân Hữu Cơ Tự Làm Từ Phế Phẩm Nông Nghiệp",
      slug: "phan-huu-co-tu-lam-tu-phe-pham-nong-nghiep",
      excerpt: "Cách chúng tôi tự sản xuất phân hữu cơ từ rơm rạ và phế phẩm trong vườn...",
      date: "10/01/2024",
      author: "Bác Năm",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "8 phút đọc",
    },
    {
      title: "Khách Hàng Thân Thiết - Niềm Động Lực Của Chúng Tôi",
      slug: "khach-hang-than-thiet-niem-dong-luc-cua-chung-toi",
      excerpt: "Những câu chuyện cảm động về khách hàng đã gắn bó với gia đình suốt nhiều năm...",
      date: "08/01/2024",
      author: "Cô Sáu",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 phút đọc",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Câu Chuyện Khác</h2>
          <p className="text-gray-600">Những chia sẻ thú vị khác từ vườn rau của chúng tôi</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>📅 {post.date}</span>
                  <span className="mx-2">•</span>
                  <span>👨‍🌾 {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="mt-4">
                  <Link
                    href={`/cau-chuyen/${post.slug}`}
                    className="text-green-600 hover:text-green-700 font-medium text-sm cursor-pointer"
                  >
                    Đọc thêm →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
