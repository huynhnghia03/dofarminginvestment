"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext"; // 1. Import hook

// Định nghĩa kiểu cho một sản phẩm
interface Product {
  name: string;
  image: string;
  link: string;
  rating: number;
}

const ProductCard = ({ product }: { product: Product }) => (
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
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`
              w-5 h-5 transition-colors
              ${i < product.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 group-hover:text-white'
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
  const { t } = useLanguage(); // 2. Sử dụng hook

  // 3. Lấy danh sách sản phẩm từ file JSON
  const products = t('products_page.items') || [];

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
            font-size: 0;
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #209e2e;
            opacity: 1;
            margin: 0 12px;
            position: relative;
            top: -2px;
            border-top-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
       
      `}</style>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full">
            <div className="bg-video-thumbnail absolute inset-0 bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white min-h-[430px]">
              <h1 className="text-4xl md:text-5xl font-bold">{t('products_page.title')}</h1>
              <nav className="mt-2 text-lg flex items-center">
                <Link href="/">{t('navigation.home')}</Link>
                <span className="separate"></span>
                <span>{t('products_page.breadcrumb')}</span>
              </nav>
            </div>
        </div>

      {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {Array.isArray(products) && products.map((product: Product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
      </main>
    </div>
    </>
  );
}
