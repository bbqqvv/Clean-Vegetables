import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Package, Eye, ImageIcon } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      title: "Tổng bài viết",
      value: "24",
      change: "+2 tuần này",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Sản phẩm",
      value: "12",
      change: "+1 tháng này",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Hình ảnh",
      value: "156",
      change: "+15 tuần này",
      icon: ImageIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Lượt xem",
      value: "2,847",
      change: "+12% tháng này",
      icon: Eye,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <div className={`w-8 h-8 ${stat.bgColor} rounded-full flex items-center justify-center`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
