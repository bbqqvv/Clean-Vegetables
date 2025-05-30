import { SettingsManagement } from "@/components/admin/settings-management"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cài Đặt Website</h1>
          <p className="text-gray-600">Cấu hình thông tin và tùy chỉnh website</p>
        </div>
      </div>

      <SettingsManagement />
    </div>
  )
}
