import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + giới thiệu */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-xl">🌱</div>
              <div>
                <h3 className="text-xl font-bold text-white">Rau Sạch Gia Đình</h3>
                <p className="text-sm text-green-300">Vĩnh Hiệp - Gò Quao - Kiên Giang</p>
              </div>
            </div>
            <p className="text-sm text-green-300 leading-relaxed">
              Gia đình nông dân với hơn 20 năm kinh nghiệm trồng rau sạch, cam kết mang đến sản phẩm tươi ngon, an toàn
              cho mọi gia đình.
            </p>
          </div>

          {/* Điều hướng */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Trang Web</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Trang chủ", "/"],
                ["Giới thiệu", "/gioi-thieu"],
                ["Sản phẩm", "/san-pham"],
                ["Câu chuyện", "/cau-chuyen"],
                ["Thư viện ảnh", "/thu-vien-anh"],
                ["Liên hệ", "/lien-he"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors duration-200 block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liên Hệ</h4>
            <ul className="text-sm space-y-2 text-green-300">
              <li>📞 Điện thoại: 0987 123 456</li>
              <li>💬 Zalo: 0987 123 456</li>
              <li>📧 Email: rausach.giadinh@gmail.com</li>
              <li>📍 Vĩnh Hiệp, Gò Quao, Kiên Giang</li>
              <li>🕐 Làm việc: Thứ 2 - Chủ nhật (5:00 - 18:00)</li>
            </ul>
          </div>

          {/* Sản phẩm tiêu biểu */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Sản Phẩm</h4>
            <ul className="text-sm space-y-2 text-green-300">
              <li>🥬 Rau cải xanh, rau muống, xà lách</li>
              <li>🍅 Cà chua, dưa leo, ớt</li>
              <li>🌿 Hành lá, rau thơm các loại</li>
              <li>✅ 100% tự nhiên, không thuốc trừ sâu</li>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="mt-10 border-t border-green-800 pt-6 text-center text-sm text-green-400">
          © 2025 Rau Sạch Gia Đình. Được tạo với ❤️ để phục vụ cộng đồng.
        </div>
      </div>
    </footer>
  )
}
