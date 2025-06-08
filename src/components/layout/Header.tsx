'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
  { name: 'Gallery', href: '/gallery' },
  { name: 'Tin tức', href: '/news' },
  { name: 'Blog', href: '/blog' },
  { name: 'Liên hệ', href: '/contact' },
  { name: 'Tuyển dụng', href: '/recruitment' },
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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl z-50 max-w-6xl w-[95%]">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Công Ty Cổ Phần Tập Đoàn Xuất – Nhập Khẩu Trái Cây Chánh Thu"
              width={150}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
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

        {/* Right Section: Language & Search */}
        <div className="hidden lg:flex items-center space-x-4">
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
                <Link
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <ul className="pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-green-600"
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

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Tìm kiếm</h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form className="flex gap-2">
                <input
                  type="search"
                  placeholder="Tìm kiếm..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Tìm
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;