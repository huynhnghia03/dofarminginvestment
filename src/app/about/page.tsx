"use client";
import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext'; // 1. Import hook

const ArrowIcon = () => (
    <svg
      xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
      className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
    </svg>
);

export default function About() {
  const { t } = useLanguage(); // 2. Sử dụng hook

  // 3. Lấy dữ liệu stats từ file JSON
  const stats = t('about_page.stats') || [];

  return (
    <>
    <style jsx global>{`
         .bg-video-thumbnail {
            background-image: url('/images/about/coconut.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-position: 0% 0%;
        }
        .play-button-ripple {
            position: relative;
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
            animation-delay: -0.75s;
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full">
            <div className="bg-video-thumbnail absolute inset-0 bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white min-h-[430px]">
              <h1 className="text-4xl md:text-5xl font-bold">{t('about_page.title')}</h1>
              <nav className="mt-2 text-lg flex items-center">
                <Link href="/">{t('navigation.home')}</Link>
                <span className="separate"></span>
                <span>{t('about_page.breadcrumb')}</span>
              </nav>
            </div>
        </div>

      {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto">
          {/* Introduction and Export Market Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Introduction */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-green-600 mr-4">01</span>
                <h2 className="text-2xl font-bold text-gray-800">{t('about_page.intro_title')}</h2>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-4">
                {t('about_page.intro_quote')}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
                <p>
                  {t('about_page.section1_p1')}
                </p>
                <p>
                  {t('about_page.section1_p2')}
                </p>
              </div>
            </div>


            {/* Export Market */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-green-600 mr-4">02</span>
                <h2 className="text-2xl font-bold text-gray-800">{t('about_page.export_market_title')}</h2>
              </div>
               <div className="w-full mt-4">
                  <Image
                    src="/images/about/map.png"
                    alt="Bản đồ thị trường xuất khẩu"
                    width={500}
                    height={300}
                    style={{objectFit:"contain"}}
                    className="w-full h-auto"
                  />
               </div>
            </div>
          </div>

          {/* Durian Image/Video Section */}
           <section className="container ">
            <div className="relative w-full h-96 mb-16 rounded-lg overflow-hidden">
                <Image
                    src="/images/about/durian.jpg"
                    alt="Sầu riêng Dofarming"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div  className="play-button-ripple relative z-10 w-15 h-15 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center backdrop-blur-sm hover:cursor-pointer transition-colors">
                        <Play className="w-7 h-7 md:w-8 md:h-8 text-[#1f9e2e] fill-current" />
                    </div>
                </div>
            </div>
            <div className="relative bg-white shadow-lg rounded-lg -mt-16 p-6 md:p-8 z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center divide-x divide-gray-200">
                    {Array.isArray(stats) && stats.map((stat: { value: string, label: string }) => (
                    <div key={stat.label} className="px-2">
                        <p className="text-2xl md:text-4xl font-bold text-green-600">{stat.value}</p>
                        <p className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</p>
                    </div>
                    ))}
                </div>
            </div>
          </section>

          {/* Certification Button */}
          <div className="text-center mt-16">
            <Link href="/about/certificates" className="group bg-green-600 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:bg-green-700 hover:shadow-lg">
              {t('about_page.cta_button')}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
