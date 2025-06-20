"use client";
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext'; // 1. Import hook

export default function Contact() {
  const { t } = useLanguage(); // 2. Sử dụng hook

  // 3. Lấy danh sách địa chỉ từ file JSON
  const addresses = t('contact_page.addresses') || [];

  return (
    <>
     <style jsx global>{`
         .bg-video-thumbnail {
            background-image: url('/images/contact/header-bg-3.webp');
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full">
            <div className="bg-video-thumbnail absolute inset-0 bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white min-h-[430px]">
              <h1 className="text-4xl md:text-5xl font-bold">{t('contact_page.title')}</h1>
              <nav className="mt-2 text-lg flex items-center">
                <Link href="/">{t('navigation.home')}</Link>
                <span className="separate"></span>
                <span>{t('contact_page.breadcrumb')}</span>
              </nav>
            </div>
        </div>

      {/* Contact Info Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Address Card */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white ring-4 ring-green-100">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('contact_page.address_title')}</h3>
                  <div className="text-gray-500 space-y-4 text-sm text-center">
                    {Array.isArray(addresses) && addresses.map((addr: any, index: number) => (
                      <div key={index}>
                        <p className="font-semibold text-green-700 mb-1">{addr.title}</p>
                        <p>{addr.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Hotline and Email Cards */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white ring-4 ring-green-100">
                      <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('contact_page.hotline_title')}</h3>
                    <div className="text-gray-500 space-y-2 text-sm">
                      <p><span className="font-medium text-gray-700">{t('contact_page.rep_office')}:</span> <span className="text-green-600 font-semibold">028 6278 8887</span></p>
                      <p><span className="font-medium text-gray-700">{t('contact_page.dofarming_office')}:</span> <span className="text-green-600 font-semibold">0889 269 777</span></p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white ring-4 ring-green-100">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('contact_page.email_title')}</h3>
                    <div className="text-gray-500 space-y-2 text-sm break-all">
                      <p><span className="font-medium text-gray-700">{t('contact_page.sale_email')}:</span> <span className="text-green-600 font-semibold">Hung.do@dofarminginvestment.com</span></p>
                      <p><span className="font-medium text-gray-700">{t('contact_page.service_email')}:</span> <span className="text-green-600 font-semibold">Hung.do@dofarminginvestment.com</span></p>
                      <p><span className="font-medium text-gray-700">{t('contact_page.website')}:</span> <span className="text-green-600 font-semibold">www.dofarming.com</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.044026963282!2d145.94120541514442!3d-18.014665687680577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6baffd44f74f36f7%3A0x98c190ab53556a36!2s567%20Bilyana%20Rd%2C%20Murray%20Upper%20QLD%204854%2C%20Australia!5e0!3m2!1sen!2sau!4v1718785412345"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('contact_page.form_title')}</h2>
            <p className="text-gray-600">{t('contact_page.form_subtitle')}</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder={t('contact_page.form_name_placeholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t('contact_page.form_email_placeholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder={t('contact_page.form_phone_placeholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t('contact_page.form_subject_placeholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                rows={6}
                placeholder={t('contact_page.form_message_placeholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                {t('contact_page.form_submit_button')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
