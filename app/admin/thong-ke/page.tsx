import { AnalyticsManagement } from "@/components/admin/analytics-management"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Thống Kê Website</h1>
          <p className="text-gray-600">Báo cáo chi tiết về lượt truy cập và hiệu suất</p>
        </div>
      </div>

      <AnalyticsManagement />
    </div>
  )
}
