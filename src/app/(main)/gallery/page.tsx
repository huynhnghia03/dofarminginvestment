'use client';

import Image from "next/image";
import { useCallback, useState } from "react";

const categories = [
  { id: "all", name: "Tất cả" },
  { id: "products", name: "Sản phẩm" },
  { id: "factory", name: "Nhà máy" },
  { id: "certification", name: "Chứng nhận" },
  { id: "events", name: "Sự kiện" },
];

// This would typically come from your API
const images = [
  {
    src: "/images/products/buoi-da-xanh.jpg",
    alt: "Bưởi Da Xanh",
    category: "products",
  },
  {
    src: "/images/products/sau-rieng.jpg",
    alt: "Sầu Riêng",
    category: "products",
  },
  // Add more images here
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = images.filter(
    (image) => activeCategory === "all" || image.category === activeCategory
  );

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Thư Viện Ảnh</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
