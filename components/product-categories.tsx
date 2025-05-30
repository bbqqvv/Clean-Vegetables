export function ProductCategories() {
  const categories = [
    {
      name: "Rau Lá Xanh",
      count: "6 loại",
      icon: "🥬",
      description: "Cải xanh, rau muống, xà lách...",
    },
    {
      name: "Rau Củ Quả",
      count: "4 loại",
      icon: "🍅",
      description: "Cà chua, dưa leo, ớt...",
    },
    {
      name: "Rau Thơm",
      count: "8 loại",
      icon: "🌿",
      description: "Ngò, húng quế, hành lá...",
    },
    {
      name: "Rau Theo Mùa",
      count: "Thay đổi",
      icon: "🌱",
      description: "Rau bầu, bí, đậu các loại...",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Danh Mục Sản Phẩm</h2>
          <p className="text-gray-600">Phân loại rau củ theo từng nhóm để bạn dễ dàng lựa chọn</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{category.name}</h3>
              <p className="text-green-600 font-medium mb-2">{category.count}</p>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
