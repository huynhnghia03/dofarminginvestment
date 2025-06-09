"use client";

import Image from "next/image";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";

const locations = [
  {
    name: "Văn phòng đại diện HCM",
    address: "Room 203, Floor 02, Saigon Paragon Building, 03 Nguyen Luong Bang, Tan Phu Ward, District 7, HCMC",
    mapUrl: "https://goo.gl/maps/5VQbhDVjnTvhxzu19",
  },
  {
    name: "Nhà máy 1 - Dofarming Bến Tre",
    address: "Ấp Nhơn Phú, Xã Hòa Nghĩa, Huyện Chợ Lách, Tỉnh Bến Tre",
    mapUrl: "https://goo.gl/maps/3eBHeJ9VNxvy6x6z8",
  },
  {
    name: "Nhà máy 2 - Dofarming Nha Trang",
    address: "KCN Suối Dầu, Xã Suối Tân, Huyện Cam Lâm, Tỉnh Khánh Hòa",
  },
  {
    name: "Nhà máy 3 - Dofarming Đăk Lăk",
    address: "Thôn Nam Kỳ, Xã Ea Drông, Huyện Cư M'gar, Tỉnh Đăk Lăk",
    mapUrl: "https://goo.gl/maps/GFp9jmS8ugoNNNu49",
  },
];

const contactInfo = {
  phones: [
    { label: "Văn phòng đại diện HCM", number: "028 6278 8887" },
    { label: "Văn phòng Dofarming Bến Tre", number: "0889 269 777" },
  ],
  emails: [
    { label: "Sale", address: "sales@Dofarming.com" },
    { label: "Customer Service", address: "contact@Dofarming.com" },
  ],
  workingHours: "Thứ 2 – Thứ 6: 8:00 - 17:00\nNghỉ thứ 7, chủ nhật và các ngày lễ",
};

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="/images/contact/hero-contact.jpg"
          alt="Liên hệ Dofarming"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ</h1>
            <p className="text-lg md:text-xl">
              Kết nối với Dofarming
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Numbers */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <PhoneIcon className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-xl font-bold">Hotline</h2>
              </div>
              <div className="space-y-4">
                {contactInfo.phones.map((phone, index) => (
                  <div key={index}>
                    <p className="text-gray-600">{phone.label}</p>
                    <a
                      href={`tel:${phone.number.replace(/\s/g, "")}`}
                      className="text-primary hover:text-secondary font-medium"
                    >
                      {phone.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <EnvelopeIcon className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-xl font-bold">Email</h2>
              </div>
              <div className="space-y-4">
                {contactInfo.emails.map((email, index) => (
                  <div key={index}>
                    <p className="text-gray-600">{email.label}</p>
                    <a
                      href={`mailto:${email.address}`}
                      className="text-primary hover:text-secondary font-medium"
                    >
                      {email.address}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <ClockIcon className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-xl font-bold">Giờ làm việc</h2>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{contactInfo.workingHours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Địa Điểm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">{location.name}</h3>
                    <p className="text-gray-600 mb-4">{location.address}</p>
                    {location.mapUrl && (
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary font-medium"
                      >
                        Xem bản đồ →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Gửi Tin Nhắn</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 rounded-lg transition-colors"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
