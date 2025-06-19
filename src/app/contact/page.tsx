"use client";
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';


export default function Contact() {
  return (
    <>
     <style jsx global>{`
         .bg-video-thumbnail {
            background-image: url('/images/contact/header-bg-3.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-position: 0% 0%;
    }
        .play-button-ripple {
            position: relative;
        }
             .separate {
            font-size: 0; /* Ẩn nội dung văn bản bên trong */
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #209e2e;
            opacity: 1;
            margin: 0 12px;
            position: relative; /* Thêm position relative để căn chỉnh */
            top: -2px; /* Căn chỉnh vị trí */
            border-top-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        .play-button-ripple::before,
        .play-button-ripple::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.8);
            animation: ripple-effect 1.5s infinite ease-out;
            z-index: -1;
        }
        .play-button-ripple::after {
            animation-delay: -1s; /* Bắt đầu gợn sóng thứ hai sau 1s */
        }
        @keyframes ripple-effect {
          0% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full">
            <div className="bg-video-thumbnail absolute inset-0 bg-cover bg-center  bg-video-thumbnail">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white min-h-[430px]">
              <h1 className="text-4xl md:text-5xl font-bold">Liên Hệ</h1>
              <nav className="mt-2 text-lg flex items-center">
                <Link href="/">Home</Link>
                <span className="separate"></span>
                <span>Liên Hệ</span>
              </nav>
            </div>
        </div>

      {/* Contact Info Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          {/* Top Row - Address and Hotline */}
           {/* <div className="bg-gray-50 min-h-screen p-8"> */}
      <div className="max-w-7xl mx-auto">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Address Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white ring-4 ring-green-100">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Address</h3>
              <div className="text-gray-500 space-y-4 text-sm text-center">
                <div>
                  <p className="font-semibold text-green-700 mb-1">Representative Address</p>
                  <p>567 Bilyana road - Murray upper - QLD - 4854.</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-1">Address 2</p>
                  <p>301 Mountainview road - airville - QLD- 4807.</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-1">Address 3</p>
                  <p>75 Trembath road - Horseshoe lagoon - QLD- 4809.</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-1">Address 4</p>
                  <p>103 Trembath road - Horseshoe lagoon - QLD- 4809.</p>
                </div>
                 <div>
                  <p className="font-semibold text-green-700 mb-1">Address 5</p>
                  <p>182 homestead road - Frederick field- QLD 4806.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hotline and Email Cards */}
          <div className="space-y-8">
            {/* Hotline Card */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white ring-4 ring-green-100">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Hotline</h3>
                <div className="text-gray-500 space-y-2 text-sm">
                  <p><span className="font-medium text-gray-700">Văn phòng đại diện:</span> <span className="text-green-600 font-semibold">028 6278 8887</span></p>
                  <p><span className="font-medium text-gray-700">Văn phòng Dofarming:</span> <span className="text-green-600 font-semibold">0889 269 777</span></p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white ring-4 ring-green-100">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Email</h3>
                <div className="text-gray-500 space-y-2 text-sm">
                  <p><span className="font-medium text-gray-700">Sale:</span> <span className="text-green-600 font-semibold">Hung.do@dofarminginvestment.com</span></p>
                  <p><span className="font-medium text-gray-700">Customer Service:</span> <span className="text-green-600 font-semibold">Hung.do@dofarminginvestment.com</span></p>
                  <p><span className="font-medium text-gray-700">Website:</span> <span className="text-green-600 font-semibold"> www.dofarming.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}

          {/* Bottom Row - Email (Centered) */}
       
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.044026963282!2d145.94120541514442!3d-18.014665687680577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6baffd44f74f36f7%3A0x98c190ab53556a36!2s567%20Bilyana%20Rd%2C%20Murray%20Upper%20QLD%204854%2C%20Australia!5e0!3m2!1sen!2sau!4v1718785412345"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Liên hệ & Hỗ trợ</h2>
            <p className="text-gray-600">Quý khách vui lòng để lại tin nhắn, Dofarming sẽ liên lạc trong thời gian sớm nhất.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Tên bạn"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Tiêu đề"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                rows={6}
                placeholder="Nhập nội dung"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Gửi Tin Nhắn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}









