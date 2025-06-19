'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext'; // Điều chỉnh đường dẫn nếu cần

const HeroSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Lấy danh sách slides từ file JSON
  const slides = t('home_page.hero_section.slides') || [];

  const nextSlide = useCallback(() => {
    if (!isAnimating && slides.length > 0) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600); // Transition duration
    }
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px]">
      {/* SVG Clip Path Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curved-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M 0.08,0 C 0.05,0 0.02,0.02 0,0.05 L 0,0.92 C 0,0.95 0.02,0.98 0.05,1 L 0.92,1 C 0.95,1 0.98,0.98 1,0.95 L 1,0.08 C 1,0.05 0.98,0.02 0.95,0 L 0.08,0 Z" />
          </clipPath>
          <clipPath id="curved-clip-path-mobile" clipPathUnits="objectBoundingBox">
            <path d="M 0.06,0 C 0.03,0 0.01,0.01 0,0.03 L 0,0.94 C 0,0.97 0.01,0.99 0.03,1 L 0.94,1 C 0.97,1 0.99,0.97 1,0.94 L 1,0.06 C 1,0.03 0.97,0.01 0.94,0 L 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Main Slider Container */}
      <div className="slider-container relative w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((src: string, index: number) => (
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
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

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
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50">
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
              <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center text-2xl">🥭</div>
            </div>
            <div className="absolute top-16 -right-4 w-12 h-12 opacity-70 animate-pulse delay-300">
              <div className="w-full h-full bg-pink-400 rounded-full flex items-center justify-center text-xl">🍎</div>
            </div>
            <div className="absolute -bottom-4 left-12 w-14 h-14 opacity-60 animate-bounce delay-500">
              <div className="w-full h-full bg-orange-400 rounded-full flex items-center justify-center text-xl">🍊</div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              {t('home_page.hero_section.title_part1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {t('home_page.hero_section.title_highlight')}
              </span>
              {t('home_page.hero_section.title_part2')}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('home_page.hero_section.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t('home_page.hero_section.products_button')}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                {t('home_page.hero_section.about_button')}
              </Link>
            </div>
          </div>

          {/* Right Side - Slider */}
          <div className="relative">
            <HeroSlider />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-300 to-blue-300 rounded-full opacity-15 animate-pulse delay-700"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
