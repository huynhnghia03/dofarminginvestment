// import Image from 'next/image';
// import Link from 'next/link';

// const news = [
//   {
//     title: '[Tin mới] Tuyển dụng Chuyên viên Thu mua',
//     date: '2024-11-26',
//     link: '/news/tuyen-dung-chuyen-vien-thu-mua'
//   },
//   {
//     title: 'Thủ tướng Phạm Minh Chính cùng Thủ tướng Hà Lan Mark Rutte thăm vựa trái cây Dofarming',
//     date: '2024-10-14',
//     link: '/news/thu-tuong-tham-chanh-thu'
//   },
//   {
//     title: 'Chuyển đổi số hướng tới nông nghiệp thông minh',
//     date: '2023-12-02',
//     link: '/news/chuyen-doi-so'
//   },
//   {
//     title: 'Mùa sầu riêng hốt lộc: Người trạnh giành, kẻ thờ ơ',
//     date: '2023-11-30',
//     link: '/news/mua-sau-rieng'
//   }
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Liên hệ */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Liên hệ</h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <Image
//                   src="/iconmonstr-location-2.svg"
//                   alt="Địa chỉ"
//                   width={24}
//                   height={24}
//                   className="mt-1"
//                 />
//                 <p>
//                   Room 203, Floor 02, Saigon Paragon Building, No. 03 Nguyen Luong Bang Street, Tan Phu Ward, District 7, Ho Chi Minh City.
//                 </p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Image
//                   src="/mobile-svgrepo-com.svg"
//                   alt="MST"
//                   width={24}
//                   height={24}
//                 />
//                 <p>MST: 0316940426</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
//                 </svg>
//                 <p>028 6278 8887 (VPĐD)</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Image
//                   src="/iconmonstr-email-8.svg"
//                   alt="Email"
//                   width={24}
//                   height={24}
//                 />
//                 <a href="mailto:sales@Dofarming.com" className="hover:text-green-600">
//                   sales@Dofarming.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Giờ làm việc */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Giờ Làm Việc</h3>
//             <div className="space-y-4">
//               <p className="italic">
//                 Giờ làm việc bộ phận văn phòng, hành chính & kinh doanh:
//               </p>
//               <p>Thứ 2 – Thứ 6: 8:00 - 17:00</p>
//               <p>Nghỉ thứ 7, chủ nhật và các ngày lễ</p>
//               <p>VP HCM: 028 6278 8887</p>
//               <Link 
//                 href="#"
//                 className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors mt-4"
//               >
//                 <span>PROFILE</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//                   <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V13.5a.75.75 0 0 1 1.5 0v5.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h5.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
//                 </svg>
//               </Link>
//             </div>
//           </div>

//           {/* Tin tức */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Tin Tức Dofarming</h3>
//             <div className="space-y-4">
//               {news.map((item) => (
//                 <Link 
//                   key={item.title}
//                   href={item.link}
//                   className="block group"
//                 >
//                   <div className="flex items-start space-x-2">
//                     <span className="text-green-600 mt-1.5">•</span>
//                     <div>
//                       <p className="group-hover:text-green-600 transition-colors line-clamp-2">
//                         {item.title}
//                       </p>
//                       <time className="text-sm text-gray-500">
//                         {new Date(item.date).toLocaleDateString('vi-VN')}
//                       </time>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="flex space-x-4 mt-6">
//               <a
//                 href="https://facebook.com/chanhthugroup"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                 </svg>
//               </a>
//               <a
//                 href="https://tiktok.com/@chanhthugroup"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                 </svg>
//               </a>
//               <a
//                 href="https://youtube.com/@chanhthugroup"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Form hỗ trợ */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Hỗ Trợ Tư Vấn</h3>
//             <p className="mb-4">
//               Quý khách vui lòng để lại số điện thoại để được hỗ trợ trong thời gian nhanh nhất.
//             </p>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Họ tên"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//               <input
//                 type="tel"
//                 placeholder="Số điện thoại"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
//               >
//                 Gửi Tin Nhắn
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright & Payment Methods */}
//         <div className="absolute-footer dark medium-text-center text-center mt-16 pt-8 border-t border-gray-200">
//           <div className="container clearfix">
//             <div className="flex flex-col md:flex-column justify-between items-center" style={{flexDirection: 'column'}}>
//               {/* Payment Icons */}
//               <div className="footer-secondary flex flex-col md:flex-column pull-right order-2 md:order-1">
//                 <div className="flex flex-col md:flex-column payment-icons inline-block">
//                   {/* ATM */}
//                   <div className="payment-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" className="w-10 h-6 fill-current text-gray-500">
//                       <path d="M19.112 24.647l-1.249-4.1h-6.279l-1.249 4.1h-3.935l6.079-17.295h4.465l6.102 17.295h-3.935zM16.991 17.484c-1.155-3.715-1.804-5.816-1.949-6.303s-0.25-0.872-0.312-1.155c-0.259 1.005-1.002 3.491-2.227 7.457h4.488z"/>
//                     </svg>
//                   </div>
//                   {/* Bank Transfer */}
//                   <div className="payment-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" className="w-10 h-6 fill-current text-gray-500">
//                       <path d="M53.071-0c0.936 0 1.717 0.339 2.342 1.014 0.676 0.625 1.014 1.405 1.014 2.342v25.288c0 0.936-0.339 1.717-1.014 2.342-0.625 0.677-1.405 1.014-2.342 1.014h-42.143c-0.936 0-1.717-0.338-2.342-1.014-0.676-0.625-1.014-1.405-1.014-2.342v-25.288c0-0.936 0.338-1.717 1.014-2.342 0.625-0.675 1.405-1.014 2.342-1.014h42.143z"/>
//                     </svg>
//                   </div>
//                   {/* JCB */}
//                   <div className="payment-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" className="w-10 h-6 fill-current text-gray-500">
//                       <path d="M26.6745 12.7423C26.6745 8.67216 28.5785 5.05979 31.5 2.72577C29.3499 1.0268 26.6376 0 23.6791 0C16.6707 0 11 5.69897 11 12.7423C11 19.7856 16.6707 25.4845 23.6791 25.4845C26.6376 25.4845 29.3499 24.4577 31.5 22.7588C28.5744 20.4577 26.6745 16.8124 26.6745 12.7423Z"/>
//                     </svg>
//                   </div>
//                   {/* Master Card */}
//                   <div className="payment-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" className="w-10 h-6 fill-current text-gray-500">
//                       <path d="M31.5 2.72577C34.4215 5.05979 36.3255 8.67216 36.3255 12.7423C36.3255 16.8124 34.4585 20.4206 31.5 22.7588L25.9355 22.7588V2.72577L31.5 2.72577Z"/>
//                     </svg>
//                   </div>
//                   {/* Visa */}
//                   <div className="payment-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" className="w-10 h-6 fill-current text-gray-500">
//                       <path d="M10.781 7.688c-0.251-1.283-1.219-1.688-2.344-1.688h-8.376l-0.061 0.405c5.749 1.469 10.469 4.595 12.595 10.501l-1.813-9.219zM13.125 19.688l-0.531-2.781c-1.096-2.907-3.752-5.594-6.752-6.813l4.219 15.939h5.469l8.157-20.032h-5.501l-5.062 13.688z"/>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Copyright */}
//               <div className="footer-primary pull-left order-1 md:order-2">
//                 <div className="copyright-footer text-gray-600">
//                   Copyright 2025 © <strong>CÔNG TY CỔ PHẦN TẬP ĐOÀN XUẤT - NHẬP KHẨU TRÁI CÂY Dofarming</strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import React from 'react';
import { ArrowUpRightSquare, Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    title: '[Tin mới] Tuyển dụng Chuyên viên Thu mua',
    date: '2024-11-26',
    link: '/news/tuyen-dung-chuyen-vien-thu-mua'
  },
  {
    title: 'Thủ tướng Phạm Minh Chính cùng Thủ tướng',
    date: '2024-10-14',
    link: '/news/thu-tuong-tham-chanh-thu'
  },
  {
    title: 'Chuyển đổi số hướng tới nông nghiệp thông minh',
    date: '2023-12-02',
    link: '/news/chuyen-doi-so'
  },
  {
    title: 'Mùa sầu riêng hốt lộc: Người trạnh giành, kẻ thờ ơ',
    date: '2023-11-30',
    link: '/news/mua-sau-rieng'
  }
];

    const PaymentIcon = ({ children }: { children: React.ReactNode }) => (
        <div className="h-8 flex items-center">{children}</div>
    );
const Footer = () => {
  
  return (
    <>
      <style jsx global>{`
  
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
        
      `}</style>
     <footer className="bg-white">
      <div className="bg-[#F9FFF8] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Liên hệ */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Liên hệ</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
                  <p>
                    Room 203, Floor 02, Saigon Paragon Building, No. 03 Nguyen Luong Bang Street, Tan Phu Ward, District 7, Ho Chi Minh City.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p>MST: 0316940426</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p>028 6278 8887 (VPĐD)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <a href="mailto:sales@Dofarming.com" className="hover:text-green-700">
                    sales@Dofarming.com
                  </a>
                </div>
              </div>
            </div>

            {/* Giờ làm việc */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Giờ Làm Việc</h3>
              <div className="space-y-3 text-gray-700">
                <p className="italic">
                  Giờ làm việc bộ phận văn phòng, hành chính & kinh doanh:
                </p>
                <p>Thứ 2 – Thứ 6: 8:00 - 17:00</p>
                <p>Nghỉ thứ 7, chủ nhật và các ngày lễ</p>
                <p>VP HCM: 028 6278 8887</p>
                <Link
                  href="#"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors mt-4"
                >
                  <span>PROFILE</span>
                  <ArrowUpRightSquare className="w-5 h-5"/>
                </Link>
              </div>
            </div>

            {/* Tin tức */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Tin Tức Dofarming</h3>
              <div className="space-y-4">
                {news.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="block group"
                  >
                    <div className="flex items-center align-middle  space-x-2">
                      <span className="separate"></span>
                      <div>
                        <p className="group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                          {item.title}
                        </p>
                        <time className="text-sm text-gray-500">
                           {new Date(item.date).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 mt-6">
                <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-9 14.999h-2.5c0-4.418 0-9.999 0-9.999h2.5v9.999zm-1.25-11.249c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm9.25 11.249h-2.5v-4.66c0-1.293-.42-1.78-1.02-1.78s-1.18.52-1.18 1.78v4.66h-2.5c0-4.418 0-9.999 0-9.999h2.5v1.27c.563-.911 1.438-1.54 2.37-1.54 1.72 0 2.83 1.25 2.83 3.51v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Form hỗ trợ */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Hỗ Trợ Tư Vấn</h3>
              <p className="mb-4 text-gray-700">
                Quý khách vui lòng để lại số điện thoại để được hỗ trợ trong thời gian nhanh nhất.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Họ tên" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
                <input type="tel" placeholder="Số điện thoại" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
                <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
     <div className="bg-[#5c5c5c] text-[#ffffff80] absolute-footer medium-text-center text-center py-4">
    
    <div className="flex items-center justify-center gap-2 mb-4">
         <PaymentIcon><Image width={40} height={20} alt="ATM" src="atm.svg" className="h-6 filter brightness-0 invert"/></PaymentIcon>
        <PaymentIcon><Image width={40} height={20} alt="Bank Transfer" src="bank-transfer.svg" className="h-6 filter brightness-0 invert"/></PaymentIcon>
        <PaymentIcon><Image width={40} height={20} alt="JCB" src="jcb.svg" className="h-6 filter brightness-0 invert"/></PaymentIcon>
        <PaymentIcon><Image width={40} height={20} alt="MasterCard" src="mastercard.svg" className="h-6 filter brightness-0 invert"/></PaymentIcon>
        <PaymentIcon><Image width={40} height={20} alt="Visa" src="visa.svg" className="h-6 filter brightness-0 invert"/></PaymentIcon>
    </div>

    <div className="mb-4 md:mb-0">
        <p>Copyright 2025 © CÔNG TY CỔ PHẦN TẬP ĐOÀN XUẤT - NHẬP KHẨU TRÁI CÂY DOFARMING</p>
    </div>
    
</div>
    </footer>
    </>
  );
};

export default Footer;