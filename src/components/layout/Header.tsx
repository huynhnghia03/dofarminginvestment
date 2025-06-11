'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
 const pathname = usePathname();

  // Function to check if route is active
  const isActiveRoute = (href: string, children?: any[]) => {
    if (pathname === href) return true;
    if (children) {
      return children.some(child => pathname === child.href);
    }
    return false;
  };
  return (
    <>
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl z-11 max-w-6xl w-[95%]">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Mobile Menu Button - Left */}
        <button
          className="lg:hidden p-2 order-1 z-60"
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
                <div
                  onMouseEnter={() => {
                    setHoveredItem(item.href);
                    item.children && setActiveDropdown(item.href);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    !item.children && setActiveDropdown(null);
                  }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 font-medium uppercase text-sm flex items-center relative transition-colors duration-300 ${
                      isActiveRoute(item.href, item.children)
                        ? 'text-green-600'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Active indicator background with ripple effect */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
                    isActiveRoute(item.href, item.children)
                      ? ' scale-100 opacity-100'
                      : ' scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Ripple effect rings */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-500 -z-20 ${
                    isActiveRoute(item.href, item.children)
                      ? ' scale-110 opacity-30 animate-pulse'
                      : 'scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-20'
                  }`}></div>
                  
                  <div className={`absolute inset-0 rounded-lg transition-all duration-700 -z-30 ${
                    isActiveRoute(item.href, item.children)
                      ? ' scale-125 opacity-20'
                      : 'scale-105 opacity-0 group-hover:scale-125 group-hover:opacity-15 group-hover:animate-ping'
                  }`}></div>
                  
                  <div className={`absolute inset-0 rounded-lg transition-all duration-1000 -z-40 ${
                    isActiveRoute(item.href, item.children)
                      ? ' scale-140 opacity-10'
                      : 'scale-110 opacity-0 group-hover:scale-140 group-hover:opacity-10'
                  }`}></div>
                  
                  {/* Active/Hover indicator dot - Show for active item when not hovering others, or for hovered item */}
                  {((isActiveRoute(item.href, item.children) && !hoveredItem) || hoveredItem === item.href) && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-green-600 scale-100 opacity-100 shadow-lg shadow-green-500/50 transition-all duration-300">
                      {/* Dot glow rings */}
                      <div className="absolute inset-0 rounded-full bg-green-500 scale-150 opacity-30 animate-ping transition-all duration-500"></div>
                      <div className="absolute inset-0 rounded-full bg-green-400 scale-200 opacity-20 transition-all duration-700"></div>
                      <div className="absolute inset-0 rounded-full bg-green-300 scale-300 opacity-10 animate-pulse transition-all duration-1000"></div>
                      <div className="absolute inset-0 rounded-full bg-green-200 scale-400 opacity-5 transition-all duration-1200"></div>
                    </div>
                  )}

                  {item.children && activeDropdown === item.href && (
                    <ul 
                      className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100"
                      onMouseEnter={() => setActiveDropdown(item.href)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block px-4 py-2 text-sm rounded-md mx-2 transition-colors duration-200 ${
                              pathname === child.href
                                ? 'text-green-600 '
                                : 'text-gray-700 hover:text-green-600 hover:bg-gray-50 '
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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

      {/* Mobile Navigation Overlay */}
   

      {/* Search Overlay */}
    
    </header>
     <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop - Updated for lighter overlay */}
        <div 
          className={`absolute inset-0 bg-black/70  transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'bg-opacity-80' : 'bg-opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Slide Menu */}
        <div className={`absolute top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            <div className="p-6">
              {/* Header của menu */}
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={120}
                  height={45}
                  className="h-11 w-auto"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block py-3 text-gray-700 hover:text-green-600 flex-grow font-medium"
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
                            className={`w-4 h-4 transform transition-transform duration-200 ${
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
                    {item.children && (
                      <ul className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.href ? 'max-h-96 mt-2' : 'max-h-0'
                      }`}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm text-gray-600 hover:text-green-600 border-l-2 border-gray-200 pl-3 hover:border-green-600 transition-colors"
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

              {/* Language switcher trong mobile menu */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Ngôn ngữ</h3>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-md transition-colors ${
                        currentLang === lang.code 
                          ? 'bg-green-50 text-green-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setCurrentLang(lang.code);
                      }}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={20}
                        height={14}
                        className="rounded"
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
     
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