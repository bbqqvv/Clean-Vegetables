import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rau Sạch Gia Đình</h3>
                <p className="text-green-200 text-sm">Vĩnh Hiệp - Gò Quao - Kiên Giang</p>
              </div>
            </div>
            <p className="text-green-200">
              Gia đình nông dân với 20+ năm kinh nghiệm trồng rau sạch, cam kết mang đến sản phẩm tươi ngon, an toàn cho
              mọi gia đình.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Trang Web</h4>
            <div className="space-y-2 text-green-200">
              <Link href="/" className="block hover:text-white transition-colors">
                Trang chủ
              </Link>
              <Link href="/gioi-thieu" className="block hover:text-white transition-colors">
                Giới thiệu
              </Link>
              <Link href="/san-pham" className="block hover:text-white transition-colors">
                Sản phẩm
              </Link>
              <Link href="/cau-chuyen" className="block hover:text-white transition-colors">
                Câu chuyện
              </Link>
              <Link href="/thu-vien-anh" className="block hover:text-white transition-colors">
                Thư viện ảnh
              </Link>
              <Link href="/lien-he" className="block hover:text-white transition-colors">
                Liên hệ
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-2 text-green-200">
              <p>📞 Điện thoại: 0987 123 456</p>
              <p>💬 Zalo: 0987 123 456</p>
              <p>📧 Email: rausach.giadinh@gmail.com</p>
              <p>📍 Xã Vĩnh Hiệp, Huyện Gò Quao, Tỉnh Kiên Giang</p>
              <p>🕐 Thứ 2 - Chủ nhật: 5:00 - 18:00</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sản Phẩm</h4>
            <div className="space-y-2 text-green-200">
              <p>🥬 Rau cải xanh, rau muống, xà lách</p>
              <p>🍅 Cà chua, dưa leo, ớt</p>
              <p>🌿 Hành lá, rau thơm các loại</p>
              <p>✅ 100% tự nhiên, không thuốc trừ sâu</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">© 2024 Rau Sạch Gia Đình. Được tạo với ❤️ để phục vụ cộng đồng.</p>
        </div>
      </div>
    </footer>
  )
}
