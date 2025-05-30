import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface RelatedPostsProps {
  currentSlug: string
}

export function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const allPosts = [
    {
      title: "Bí Quyết Trồng Rau Cải Xanh Tươi Ngon",
      slug: "bi-quyet-trong-rau-cai-xanh",
      excerpt: "Chia sẻ kinh nghiệm 20 năm trồng rau cải xanh, từ khâu chuẩn bị đất đến thu hoạch...",
      date: "20/01/2024",
      author: "Bác Năm",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "10 phút đọc",
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
  ]

  const relatedPosts = allPosts.filter((post) => post.slug !== currentSlug).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Bài Viết Liên Quan</h2>
          <p className="text-gray-600">Những câu chuyện thú vị khác từ vườn rau</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relatedPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>📅 {post.date}</span>
                  <span className="mx-2">•</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-3 line-clamp-2">
                  <Link href={`/cau-chuyen/${post.slug}`} className="hover:text-green-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <Link
                  href={`/cau-chuyen/${post.slug}`}
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  Đọc thêm →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
