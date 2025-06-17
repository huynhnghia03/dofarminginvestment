"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: 'Sầu Riêng',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-sau-rieng-4-534x534.png',
    link: '/sau-rieng',
    rating: 5,
  },
  {
    name: 'Xoài',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-xoai-4-534x534.png',
    link: '/xoai',
    rating: 0,
  },
  {
    name: 'Bưởi da xanh',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/buoi-da-xanh-1-534x534.jpg',
    link: '/buoi-da-xanh',
    rating: 0,
  },
  {
    name: 'Nhãn',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/nhan-2-534x534.jpg',
    link: '/nhan',
    rating: 0,
  },
];
const ProductCard = ({ product }: { product: typeof products[number] }) => (
  <div className="group text-center rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative overflow-hidden">
      <Link href={product.link}>
        <Image
          src={product.image}
          alt={product.name}
          width={534}
          height={534}
          className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
    <div className="p-4 bg-white group-hover:bg-green-600 transition-colors duration-300">
      <div className="flex justify-center mb-2 h-5">
        {/* Sử dụng một map và class có điều kiện để đơn giản hóa */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`
              w-5 h-5 transition-colors
              ${i < product.rating
                ? 'text-yellow-400 fill-yellow-400' // Sao đã được đánh giá
                : 'text-gray-300 group-hover:text-white' // Sao trống, đổi màu khi hover
              }
            `}
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors">
        <Link href={product.link}>
          {product.name}
        </Link>
      </h3>
    </div>
  </div>
);
export default function Products() {
 return (
    <>
    <style jsx global>{`
         .bg-video-thumbnail {
            background-image: url('/images/products/header-bg.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-position: 0% 0%;
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
       
      `}</style>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full">
            <div className="bg-video-thumbnail absolute inset-0 bg-cover bg-center  bg-video-thumbnail">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white min-h-[430px]">
              <h1 className="text-4xl md:text-5xl font-bold">Sản Phẩm</h1>
              <nav className="mt-2 text-lg flex items-center">
                <Link href="/">Home</Link>
                <span className="separate"></span>
                <span>Sản Phẩm</span>
              </nav>
            </div>
        </div>

      {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
      </main>
    </div>
    </>
  );
}
