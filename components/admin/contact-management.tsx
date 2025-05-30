"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MessageSquare, Archive, Trash2, Reply } from "lucide-react"

export function ContactManagement() {
  const [contacts] = useState([
    {
      id: 1,
      name: "Chị Thanh Hoa",
      email: "thanhhoa@gmail.com",
      phone: "0987654321",
      subject: "Đặt hàng rau cải xanh",
      message: "Chào bác, em muốn đặt 5kg rau cải xanh và 3kg rau muống. Bác có thể giao vào sáng mai được không ạ?",
      date: "26/01/2024 09:30",
      status: "new",
      priority: "high",
    },
    {
      id: 2,
      name: "Anh Minh Đức",
      email: "minhducfarm@gmail.com",
      phone: "0912345678",
      subject: "Hợp tác cung cấp rau",
      message: "Tôi là chủ nhà hàng ở Rạch Giá, muốn tìm hiểu về việc cung cấp rau sạch thường xuyên cho nhà hàng.",
      date: "25/01/2024 14:20",
      status: "replied",
      priority: "medium",
    },
    {
      id: 3,
      name: "Cô Lan",
      email: "lanpham@yahoo.com",
      phone: "0908765432",
      subject: "Hỏi về giá rau thơm",
      message: "Cô muốn hỏi giá các loại rau thơm như ngò, húng quế, kinh giới. Cô cần khoảng 2kg mỗi loại.",
      date: "24/01/2024 16:45",
      status: "pending",
      priority: "low",
    },
    {
      id: 4,
      name: "Chị Mai Linh",
      email: "mailinh.kg@gmail.com",
      phone: "0934567890",
      subject: "Phản hồi về chất lượng",
      message:
        "Em mua rau của bác tuần trước, chất lượng rất tốt. Em muốn đặt hàng thường xuyên, bác có thể tư vấn không ạ?",
      date: "23/01/2024 11:15",
      status: "archived",
      priority: "medium",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-100 text-blue-800">Mới</Badge>
      case "replied":
        return <Badge className="bg-green-100 text-green-800">Đã trả lời</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Đang xử lý</Badge>
      case "archived":
        return <Badge variant="secondary">Đã lưu trữ</Badge>
      default:
        return <Badge variant="outline">Không xác định</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Cao</Badge>
      case "medium":
        return <Badge className="bg-orange-100 text-orange-800">Trung bình</Badge>
      case "low":
        return <Badge className="bg-gray-100 text-gray-800">Thấp</Badge>
      default:
        return <Badge variant="outline">Không xác định</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-600">12</div>
                <p className="text-sm text-gray-600">Tin nhắn mới</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Reply className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-600">8</div>
                <p className="text-sm text-gray-600">Đã trả lời</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-yellow-600">5</div>
                <p className="text-sm text-gray-600">Đang xử lý</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Archive className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-2xl font-bold text-gray-600">45</div>
                <p className="text-sm text-gray-600">Đã lưu trữ</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Messages */}
      <Card>
        <CardHeader>
          <CardTitle>Tin nhắn liên hệ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {contact.email}
                      </span>
                      <span className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {contact.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getPriorityBadge(contact.priority)}
                    {getStatusBadge(contact.status)}
                  </div>
                </div>

                <h5 className="font-medium text-gray-800 mb-2">{contact.subject}</h5>
                <p className="text-gray-700 mb-3">{contact.message}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{contact.date}</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      <Reply className="w-4 h-4 mr-1" />
                      Trả lời
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                      <Archive className="w-4 h-4 mr-1" />
                      Lưu trữ
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
