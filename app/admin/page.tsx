import { AdminStats } from "@/components/admin/admin-stats"
import { RecentActivity } from "@/components/admin/recent-activity"
import { QuickActions } from "@/components/admin/quick-actions"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Chào mừng bạn đến với trang quản trị website Rau Sạch Gia Đình</p>
      </div>

      <AdminStats />

      <div className="grid lg:grid-cols-2 gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  )
}
