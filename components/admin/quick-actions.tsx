import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Upload, Settings, BarChart3 } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Tạo bài viết",
      description: "Viết bài mới cho blog",
      icon: Plus,
      href: "/admin/bai-viet/tao-moi",
    },
    {
      title: "Upload hình ảnh",
      description: "Thêm ảnh vào thư viện",
      icon: Upload,
      href: "/admin/hinh-anh",
    },
    {
      title: "Xem thống kê",
      description: "Báo cáo chi tiết",
      icon: BarChart3,
      href: "/admin/thong-ke",
    },
    {
      title: "Cài đặt",
      description: "Cấu hình website",
      icon: Settings,
      href: "/admin/cai-dat",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thao tác nhanh</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button key={index} variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2">
              <action.icon className="w-5 h-5 text-green-600" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-xs text-gray-500">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
