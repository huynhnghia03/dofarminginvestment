'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, X } from 'lucide-react';

const navigation = [
  { 
    name: 'Trang chủ',
    href: '/',
  },
  { 
    name: 'Về chúng tôi',
    href: '/about',
    children: [
      { name: 'Giới thiệu', href: '/about' },
      { name: 'Chứng nhận tiêu chuẩn', href: '/about/certificates' },
      { name: 'Lịch sử & định hướng phát triển', href: '/about/history' },
      { name: 'Thành viên ban quản trị', href: '/about/management' },
    ]
  },
  { name: 'Sản phẩm', href: '/products' },
  { name: 'Liên hệ', href: '/contact' },
];

const languages = [
  { code: 'vi', name: 'Tiếng Việt', flag: '/images/flags/flag-vn.png' },
  { code: 'en', name: 'English', flag: '/images/flags/flag-en.png' },
  { code: 'zh', name: '简体中文', flag: '/images/flags/flag-cn.png' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState('vi');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  return (
    <>
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl z-50 max-w-6xl w-[95%]">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Mobile Menu Button - Left */}
        <button
          className="lg:hidden p-2 order-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo - Center on mobile, Left on desktop */}
        <div className="flex-shrink-0 order-2 lg:order-1">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Công Ty Cổ Phần Tập Đoàn Xuất – Nhập Khẩu Trái Cây Dofarming"
              width={150}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Language & Search - Right */}
        <div className="lg:hidden flex items-center space-x-2 order-3">
          {/* Mobile Language Switcher */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-100"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <Image
                src={languages.find(l => l.code === currentLang)?.flag || languages[0].flag}
                alt="Language"
                width={18}
                height={12}
                className="rounded"
              />
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsLangDropdownOpen(false);
                    }}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={18}
                      height={12}
                      className="rounded"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Search Button */}
          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center order-2">
          <ul className="flex space-x-1">
            {navigation.map((item) => (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium uppercase text-sm flex items-center"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}
                  {item.children && (
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {item.children && activeDropdown === item.href && (
                  <ul className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md mx-2"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Section: Language & Search */}
        <div className="hidden lg:flex items-center space-x-4 order-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-100"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <Image
                src={languages.find(l => l.code === currentLang)?.flag || languages[0].flag}
                alt="Language"
                width={18}
                height={12}
                className="rounded"
              />
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsLangDropdownOpen(false);
                    }}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={18}
                      height={12}
                      className="rounded"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t rounded-b-xl">
          <ul className="px-4 pt-2 pb-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-green-600 flex-grow"
                    onClick={() => !item.children && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Nút mở/đóng submenu cho mobile */}
                  {item.children && (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.href ? null : item.href)
                      }
                      className="p-2 text-gray-500 hover:text-green-600"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          activeDropdown === item.href ? 'rotate-180' : ''
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
                {/* Submenu cho mobile */}
                {item.children && activeDropdown === item.href && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-green-600 border-l-2 border-gray-200 pl-3 hover:border-green-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Overlay */}



    </header>
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsSearchOpen(false)}></div>
          
          <div className="relative w-full max-w-2xl" onClick={e => e.stopPropagation()}>
              <form className="relative">
                  <input
                      type="search"
                      placeholder="Tìm kiếm..."
                      className="w-full pl-6 pr-14 py-4 text-lg bg-white rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      autoFocus
                  />
                  <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" aria-label="Tìm kiếm">
                      <Search className="w-6 h-6"/>
                  </button>
              </form>
          </div>

          <button 
              onClick={() => setIsSearchOpen(false)} 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors" 
              aria-label="Đóng tìm kiếm"
          >
              <X className="w-6 h-6"/>
          </button>
      </div>
      </>
  );
};

export default Header;