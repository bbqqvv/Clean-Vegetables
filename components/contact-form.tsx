"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    products: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-green-800">Gửi Tin Nhắn</CardTitle>
        <p className="text-gray-600">Điền thông tin để chúng tôi tư vấn và báo giá cho bạn</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Họ và tên *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Số điện thoại *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div>
            <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-2">
              Sản phẩm quan tâm
            </label>
            <select
              id="products"
              name="products"
              value={formData.products}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Chọn loại rau quan tâm</option>
              <option value="rau-la">Rau lá xanh</option>
              <option value="rau-cu-qua">Rau củ quả</option>
              <option value="rau-thom">Rau thơm</option>
              <option value="tat-ca">Tất cả các loại</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tin nhắn
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Nhập tin nhắn của bạn (số lượng cần đặt, thời gian giao hàng...)"
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg">
            Gửi tin nhắn
          </Button>
        </form>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 Lưu ý:</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Chúng tôi sẽ phản hồi trong vòng 2 giờ</li>
            <li>• Giao hàng tận nơi trong bán kính 10km</li>
            <li>• Đơn hàng tối thiểu 50,000đ</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
