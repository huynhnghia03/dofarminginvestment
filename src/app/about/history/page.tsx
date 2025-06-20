"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext'; // 1. Import hook

export default function HistoryPage() {
  const { t } = useLanguage(); // 2. Sử dụng hook

  // 3. Lấy dữ liệu động từ file JSON
  const timelineEvents = t('history_page.timeline') || [];
  const businessFields = t('history_page.mission_fields') || [];

  return (
    <>
     <style jsx global>{`
         .bg-video-thumbnail {
            background-image: url('/images/thumnailvideo.jpg');
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
    <div className="bg-white">
      {/* Hero Section */}
       <div className="relative h-64 md:h-80 w-full">
            <div className="bg-video-thumbnail absolute inset-0 bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white min-h-[430px]">
              <h1 className="text-4xl md:text-5xl font-bold text-center px-4">{t('history_page.title')}</h1>
              <nav className="mt-2 text-lg flex items-center flex-wrap justify-center">
                <Link href="/">{t('navigation.home')}</Link>
                <span className="separate"></span>
                  <Link href="/about">{t('history_page.breadcrumb_about')}</Link>
                  <span className="separate"></span>
                  <span>{t('history_page.breadcrumb_history')}</span>
              </nav>
            </div>
        </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Timeline */}
          <div>
            <div className="mb-8">
              <span className="text-green-600 font-semibold text-lg">04</span>
              <h2 className="text-2xl font-bold text-gray-800 mt-2">{t('history_page.history_section_title')}</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="space-y-8">
                {Array.isArray(timelineEvents) && timelineEvents.map((event: any, index: number) => (
                  <div key={index} className="relative flex items-start">
                    {/* Year Badge */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 text-sm z-10">
                      {event.year}
                    </div>
                    
                    {/* Content Card */}
                    <div className={`ml-6 p-6 rounded-lg shadow-lg ${event.color === 'bg-green-500' ? 'bg-green-500 text-white' : 'bg-white border border-gray-200'}`}>
                      <h3 className={`text-lg font-bold mb-3 ${event.color === 'bg-green-500' ? 'text-white' : 'text-gray-800'}`}>
                        {event.title}
                      </h3>
                      <p className={`leading-relaxed ${event.color === 'bg-green-500' ? 'text-white' : 'text-gray-600'}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Vision Section */}
            <div className="mb-12">
              <div className="mb-8">
                <span className="text-green-600 font-semibold text-lg">05</span>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">{t('history_page.orientation_section_title')}</h2>
              </div>

              {/* Vision Card */}
              <div className="bg-green-600 text-white p-8 rounded-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <h3 className="text-xl font-bold">{t('history_page.vision_title')}</h3>
                  </div>
                  <p className="leading-relaxed">{t('history_page.vision_desc_1')}</p>
                  <p className="mt-4 leading-relaxed">{t('history_page.vision_desc_2')}</p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t('history_page.mission_title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {Array.isArray(businessFields) && businessFields.map((field: any, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{field.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{field.title}</h4>
                      <p className="text-sm text-gray-600">{field.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t('history_page.core_values_title')}</h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://chanhthu.com/wp-content/uploads/2024/06/chanh-thu-orientation-1.png"
                  alt="Core Values"
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>

            {/* Credibility Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t('history_page.credibility_title')}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('history_page.unity_title')}</h4>
                  <p className="text-sm text-gray-600">{t('history_page.unity_desc')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('history_page.integrity_title')}</h4>
                  <p className="text-sm text-gray-600">{t('history_page.integrity_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center">
            {t('history_page.cta_button')}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
    </>
  );
}
