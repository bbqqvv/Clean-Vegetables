import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Package, ImageIcon, MessageSquare } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "post",
      action: "Tạo bài viết mới",
      title: "Bí Quyết Trồng Rau Cải Xanh",
      time: "2 giờ trước",
      icon: FileText,
    },
    {
      type: "product",
      action: "Cập nhật sản phẩm",
      title: "Rau Muống",
      time: "5 giờ trước",
      icon: Package,
    },
    {
      type: "image",
      action: "Upload hình ảnh",
      title: "vuon-rau-sang-som.jpg",
      time: "1 ngày trước",
      icon: ImageIcon,
    },
    {
      type: "contact",
      action: "Tin nhắn mới",
      title: "Từ Chị Lan Anh",
      time: "2 ngày trước",
      icon: MessageSquare,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hoạt động gần đây</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <activity.icon className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.title}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
