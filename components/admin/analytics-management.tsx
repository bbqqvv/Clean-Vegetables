"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Eye, Clock, Download, Calendar } from "lucide-react"

export function AnalyticsManagement() {
  const stats = [
    {
      title: "Tổng lượt truy cập",
      value: "12,847",
      change: "+15.3%",
      trend: "up",
      icon: Eye,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Người dùng duy nhất",
      value: "8,234",
      change: "+12.1%",
      trend: "up",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Thời gian trung bình",
      value: "3:24",
      change: "+8.7%",
      trend: "up",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Tỷ lệ thoát",
      value: "34.2%",
      change: "-5.4%",
      trend: "down",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const topPages = [
    { page: "Trang chủ", views: 3247, percentage: 25.3 },
    { page: "Sản phẩm", views: 2156, percentage: 16.8 },
    { page: "Giới thiệu", views: 1834, percentage: 14.3 },
    { page: "Câu chuyện", views: 1456, percentage: 11.3 },
    { page: "Liên hệ", views: 987, percentage: 7.7 },
  ]

  const trafficSources = [
    { source: "Tìm kiếm trực tiếp", visitors: 4521, percentage: 35.2 },
    { source: "Google", visitors: 3247, percentage: 25.3 },
    { source: "Facebook", visitors: 2156, percentage: 16.8 },
    { source: "Zalo", visitors: 1834, percentage: 14.3 },
    { source: "Khác", visitors: 1089, percentage: 8.4 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Thống kê tháng này</h2>
          <p className="text-gray-600">Báo cáo chi tiết về hiệu suất website</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Chọn thời gian
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Main Stats */}
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
              <p className={`text-xs mt-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {stat.change} so với tháng trước
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Trang được xem nhiều nhất</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{page.page}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${page.percentage}%` }}></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-semibold text-gray-900">{page.views.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{page.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Nguồn truy cập</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{source.source}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${source.percentage}%` }}></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-semibold text-gray-900">{source.visitors.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{source.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Lượt truy cập 30 ngày qua</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-semibold">Biểu đồ thống kê</p>
              <p className="text-sm">Tích hợp Google Analytics để xem biểu đồ chi tiết</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
