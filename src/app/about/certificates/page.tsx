"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext'; // 1. Import hook

export default function CertificatesPage() {
  const { t } = useLanguage(); // 2. Sử dụng hook

  return (
       <>
    <style jsx global>{`
         .bg-video-thumbnail {
            background-image: url('/images/about/dofarming-factory.webp');
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
              <h1 className="text-4xl md:text-5xl font-bold text-center px-4">{t('certificates_page.title')}</h1>
              <nav className="mt-2 text-lg flex items-center flex-wrap justify-center">
                <Link href="/">{t('navigation.home')}</Link>
                <span className="separate"></span>
                  <Link href="/about">{t('certificates_page.breadcrumb_about')}</Link>
                  <span className="separate"></span>
                  <span>{t('certificates_page.breadcrumb_certificates')}</span>
              </nav>
            </div>
        </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-green-600 font-semibold text-lg">03</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            {t('certificates_page.section_title')}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            {/* Safety Promise Box */}
            <div className="bg-green-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">{t('certificates_page.safety_promise_title')}</h3>
              <p className="leading-relaxed">
                {t('certificates_page.safety_promise_desc')}
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-12">
              {/* HACCP */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src="https://chanhthu.com/wp-content/uploads/2024/06/GGAP.webp"
                      alt="HACCP Certification"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-3">HACCP</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t('certificates_page.haccp_desc')}
                  </p>
                </div>
              </div>

              {/* FSSC 22000 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src="https://chanhthu.com/wp-content/uploads/2024/06/fssc__nqa_viet_nam.webp"
                      alt="FSSC 22000 Certification"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-3">FSSC 22000</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t('certificates_page.fssc_desc')}
                  </p>
                </div>
              </div>

              {/* HALAL */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src="https://chanhthu.com/wp-content/uploads/2024/06/1582015726_Logo-chung-nhan-HALAL-HCA-Vietnam.jpg"
                      alt="Halal Certification"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-3">HALAL</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t('certificates_page.halal_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:sticky lg:top-8">
            <Image
              src="https://chanhthu.com/wp-content/uploads/2024/06/chanh-thu-factory.webp"
              alt="Food processing facility"
              width={600}
              height={800}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href="/about/history" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center">
            {t('certificates_page.cta_button')}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
