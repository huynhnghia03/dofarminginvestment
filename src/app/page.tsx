'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play, Star } from "lucide-react";

// 1. Import hook useLanguage và các component cần thiết
import { useLanguage } from '../contexts/LanguageContext';
import { HeroSection } from "@/components/sections";

// Component Card sản phẩm
const ProductCard = ({ product }: { product: any }) => (
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


export default function Home() {
  // 2. Sử dụng hook để lấy hàm dịch
  const { t } = useLanguage();

  // 3. Dữ liệu cho sản phẩm và tính năng giờ được lấy từ file JSON
  const products = t('home_page.product_list') || [];
  const features = t('home_page.about_section.why_choose_us_features') || [];

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <style jsx global>{`
          .about-large-image {
            border-top-left-radius: 8em;
            border-bottom-right-radius: 8em;
            overflow: hidden;
          }
          .about-small-image-container {
            border-top-left-radius: 60px;
            border-bottom-right-radius: 60px;
            overflow: hidden;
          }
          .play-button-ripple {
            position: relative;
          }
          .bg-video-thumbnail {
            background-image: url('https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-factory.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
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
            z-index: 0;
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
        <HeroSection />

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg font-bold text-green-600 uppercase">
                  {t('home_page.about_section.subtitle')}
                </h3>
                <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-800">
                  {t('home_page.about_section.title')}
                </h2>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-600 italic">
                  {t('home_page.about_section.mission_statement')}
                </p>
                <div className="mt-6">
                  <Image src="https://chanhthu.com/wp-content/uploads/2024/03/signature.png" alt={t('home_page.about_section.ceo_title')} width={150} height={45} />
                  <p className="text-sm text-gray-700 font-semibold">{t('home_page.about_section.ceo_title')}</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mt-16">
              <div>
                <Image src="https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-sau-rieng-3.png" width={630} height={700} alt="Vườn sầu riêng" className="rounded-lg shadow-lg about-large-image " />
              </div>
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F9FFF8] rounded-lg shadow-md overflow-hidden">
                    <Image src="https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-cac-loai-trai-cay-1.png" width={630} height={700} alt={t('home_page.about_section.feature1_title')} className="w-full h-40 object-cover about-small-image-container" />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800">{t('home_page.about_section.feature1_title')}</h4>
                      <p className="text-sm text-gray-600 mt-1">{t('home_page.about_section.feature1_desc')}</p>
                    </div>
                  </div>
                  <div className="bg-[#F9FFF8] rounded-lg shadow-md overflow-hidden">
                    <Image src="https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-cac-loai-trai-cay-1-1.png" width={630} height={700} alt={t('home_page.about_section.feature2_title')} className="w-full h-40 object-cover about-small-image-container" />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800">{t('home_page.about_section.feature2_title')}</h4>
                      <p className="text-sm text-gray-600 mt-1">{t('home_page.about_section.feature2_desc')}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-800">{t('home_page.about_section.why_choose_us_title')}</h3>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {features.map((feature: any, index: number) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image src={feature.icon} alt={feature.text} width={40} height={40} />
                        </div>
                        <p className="text-gray-700">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-green-600 uppercase">
                {t('home_page.products_section.subtitle')}
              </h3>
              <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-800">
                {t('home_page.products_section.title')}
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product: any) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                {t('home_page.products_section.view_more_button')} <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Video & Stats Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-16 lg:pb-24">
          <div className="relative rounded-lg overflow-hidden h-[250px] md:h-[450px] flex items-center justify-center bg-video-thumbnail">
            <Image
              src="/images/thumnailvideo.jpg"
              alt="Nhà máy Dofarming"
              fill
              className="z-1 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <button className="play-button-ripple relative z-10 w-15 h-15 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center backdrop-blur-sm hover:cursor-pointer transition-colors">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-[#1f9e2e] fill-current" />
            </button>
          </div>
          <div className="relative bg-white shadow-lg rounded-lg -mt-16 p-6 md:p-8 z-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center divide-x divide-gray-200">
              <div className="px-2">
                <h4 className="text-2xl md:text-4xl font-bold text-green-600">120.000m²</h4>
                <p className="text-sm md:text-base text-gray-600 mt-1">{t('home_page.stats_section.packing_factory')}</p>
              </div>
              <div className="px-2">
                <h4 className="text-2xl md:text-4xl font-bold text-green-600">+200.000</h4>
                <p className="text-sm md:text-base text-gray-600 mt-1">{t('home_page.stats_section.annual_output')}</p>
              </div>
              <div className="px-2">
                <h4 className="text-2xl md:text-4xl font-bold text-green-600">+25</h4>
                <p className="text-sm md:text-base text-gray-600 mt-1">{t('home_page.stats_section.years_experience')}</p>
              </div>
              <div className="px-2">
                <h4 className="text-2xl md:text-4xl font-bold text-green-600">+20</h4>
                <p className="text-sm md:text-base text-gray-600 mt-1">{t('home_page.stats_section.importing_countries')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

