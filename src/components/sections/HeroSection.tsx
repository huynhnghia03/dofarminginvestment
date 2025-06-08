import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-sau-rieng-1.png',
    'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-mit.png',
    'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-buoi.png',
    'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-xoai.png'
  ];

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px]">
      {/* SVG Clip Path Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curved-clip-path" clipPathUnits="objectBoundingBox">
            {/* Bo tròn từ góc trái trên đến góc phải dưới, vuông từ góc phải dưới đến góc trái trên */}
            <path d="M 0.08,0 C 0.05,0 0.02,0.02 0,0.05 L 0,0.92 C 0,0.95 0.02,0.98 0.05,1 L 0.92,1 C 0.95,1 0.98,0.98 1,0.95 L 1,0.08 C 1,0.05 0.98,0.02 0.95,0 L 0.08,0 Z" />
          </clipPath>
          <clipPath id="curved-clip-path-mobile" clipPathUnits="objectBoundingBox">
            {/* Clip path đơn giản hơn cho mobile - cùng pattern */}
            <path d="M 0.06,0 C 0.03,0 0.01,0.01 0,0.03 L 0,0.94 C 0,0.97 0.01,0.99 0.03,1 L 0.94,1 C 0.97,1 0.99,0.97 1,0.94 L 1,0.06 C 1,0.03 0.97,0.01 0.94,0 L 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Main Slider Container */}
      <div className="slider-container relative w-full h-full overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-full">
          {slides.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                 width={150}
              height={56}
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          disabled={isAnimating}
        >
          <ChevronRight className="w-5 h-5" />
        </button> */}

        {/* Dots Indicator */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              disabled={isAnimating}
            />
          ))}
        </div> */}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .slider-container {
          clip-path: url(#curved-clip-path);
          -webkit-clip-path: url(#curved-clip-path);
        }
        
        @media (max-width: 768px) {
          .slider-container {
            clip-path: url(#curved-clip-path-mobile);
            -webkit-clip-path: url(#curved-clip-path-mobile);
          }
        }
        
        /* Smooth animation for better performance */
        .slider-container img {
          transform: translateZ(0);
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

// Main Component
export default function CurvedHeroSection() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -z-10 opacity-30">
          <div className="w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-20">
          <div className="w-72 h-72 bg-gradient-to-tr from-yellow-200 to-green-200 rounded-full blur-2xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-6">
            {/* Floating Fruit Icons */}
            <div className="absolute -top-8 -left-8 w-16 h-16 opacity-60 animate-bounce">
              <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                🥭
              </div>
            </div>
            <div className="absolute top-16 -right-4 w-12 h-12 opacity-70 animate-pulse delay-300">
              <div className="w-full h-full bg-pink-400 rounded-full flex items-center justify-center text-xl">
                🍎
              </div>
            </div>
            <div className="absolute -bottom-4 left-12 w-14 h-14 opacity-60 animate-bounce delay-500">
              <div className="w-full h-full bg-orange-400 rounded-full flex items-center justify-center text-xl">
                🍊
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Xây dựng niềm tin để{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                trái cây Việt
              </span>{' '}
              vươn xa
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Chánh Thu với phương châm Mỗi sản phẩm là một niềm tin, bằng
              cái tâm của người làm nghề lâu năm lĩnh vực kinh doanh trái cây,
              chúng tôi luôn mong muốn xây dựng dây chuyền sản xuất quy mô,
              khoa học, đảm bảo chất lượng an toàn vệ sinh thực phẩm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Sản phẩm 
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Giới thiệu 
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Right Side - Slider */}
          <div className="relative">
            <HeroSlider />
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-300 to-blue-300 rounded-full opacity-15 animate-pulse delay-700"></div>
          </div>
        </div>
      </section>
    </div>
  );
}