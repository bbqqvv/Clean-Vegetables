"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Save, Upload, Globe, Phone } from "lucide-react"

export function SettingsManagement() {
  const [settings, setSettings] = useState({
    siteName: "Rau Sạch Gia Đình",
    siteDescription: "Gia đình nông dân với 20+ năm kinh nghiệm trồng rau sạch",
    contactPhone: "0987 123 456",
    contactEmail: "rausach.giadinh@gmail.com",
    address: "Xã Vĩnh Hiệp, Huyện Gò Quao, Tỉnh Kiên Giang",
    workingHours: "Thứ 2 - Chủ nhật: 5:00 - 18:00",
    zaloNumber: "0987 123 456",
    facebookPage: "https://facebook.com/rausachgiadinh",
    enableNotifications: true,
    enableAnalytics: true,
    maintenanceMode: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving settings:", settings)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Cài đặt website</h2>
          <p className="text-gray-600">Cấu hình thông tin và tùy chỉnh website</p>
        </div>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="w-4 h-4 mr-2" />
          Lưu thay đổi
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Thông tin chung
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName">Tên website</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => handleInputChange("siteName", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="siteDescription">Mô tả website</Label>
              <Textarea
                id="siteDescription"
                value={settings.siteDescription}
                onChange={(e) => handleInputChange("siteDescription", e.target.value)}
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="workingHours">Giờ làm việc</Label>
              <Input
                id="workingHours"
                value={settings.workingHours}
                onChange={(e) => handleInputChange("workingHours", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Thông tin liên hệ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="contactPhone">Số điện thoại</Label>
              <Input
                id="contactPhone"
                value={settings.contactPhone}
                onChange={(e) => handleInputChange("contactPhone", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="contactEmail">Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleInputChange("contactEmail", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="zaloNumber">Số Zalo</Label>
              <Input
                id="zaloNumber"
                value={settings.zaloNumber}
                onChange={(e) => handleInputChange("zaloNumber", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="address">Địa chỉ</Label>
              <Textarea
                id="address"
                value={settings.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card>
          <CardHeader>
            <CardTitle>Mạng xã hội</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="facebookPage">Trang Facebook</Label>
              <Input
                id="facebookPage"
                value={settings.facebookPage}
                onChange={(e) => handleInputChange("facebookPage", e.target.value)}
                placeholder="https://facebook.com/..."
              />
            </div>

            <div className="pt-4">
              <Button variant="outline" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Cập nhật logo website
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Cài đặt hệ thống</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="enableNotifications">Thông báo email</Label>
                <p className="text-sm text-gray-600">Nhận thông báo khi có tin nhắn mới</p>
              </div>
              <Switch
                id="enableNotifications"
                checked={settings.enableNotifications}
                onCheckedChange={(checked) => handleInputChange("enableNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="enableAnalytics">Google Analytics</Label>
                <p className="text-sm text-gray-600">Theo dõi thống kê truy cập</p>
              </div>
              <Switch
                id="enableAnalytics"
                checked={settings.enableAnalytics}
                onCheckedChange={(checked) => handleInputChange("enableAnalytics", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="maintenanceMode">Chế độ bảo trì</Label>
                <p className="text-sm text-gray-600">Tạm thời tắt website để bảo trì</p>
              </div>
              <Switch
                id="maintenanceMode"
                checked={settings.maintenanceMode}
                onCheckedChange={(checked) => handleInputChange("maintenanceMode", checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SEO Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Cài đặt SEO</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="metaTitle">Meta Title</Label>
            <Input id="metaTitle" placeholder="Rau Sạch Gia Đình - Rau sạch tự nhiên từ vườn nhà" />
          </div>

          <div>
            <Label htmlFor="metaDescription">Meta Description</Label>
            <Textarea
              id="metaDescription"
              placeholder="Gia đình nông dân với 20+ năm kinh nghiệm trồng rau sạch tại Kiên Giang. 100% tự nhiên, không thuốc trừ sâu, giao hàng tận nơi."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="keywords">Keywords</Label>
            <Input id="keywords" placeholder="rau sạch, rau tự nhiên, rau Kiên Giang, rau không thuốc trừ sâu" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
