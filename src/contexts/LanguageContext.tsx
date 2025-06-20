'use client';

import { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';
import viTranslations from '@/lib/dictionaries/vi.json'; // Điều chỉnh đường dẫn nếu cần
import enTranslations from '@/lib/dictionaries/en.json'; // Điều chỉnh đường dẫn nếu cần
// Định nghĩa kiểu cho các ngôn ngữ được hỗ trợ
type Language = 'vi' | 'en';

// Định nghĩa kiểu cho object chứa các bản dịch
type Translations = { [key: string]: any };

const translations: Record<Language, Translations> = {
  vi: viTranslations,
  en: enTranslations,
};

// Định nghĩa kiểu cho giá trị của Context
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');
  const [trans, setTrans] = useState<Translations>(translations.vi);
  const [isMounted, setIsMounted] = useState(false);

  // Sau khi component được mount ở phía client, đọc localStorage.
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'vi' || savedLang === 'en')) {
      setLanguage(savedLang); // Nếu có ngôn ngữ đã lưu, cập nhật state
    }
    setIsMounted(true); // Đánh dấu là component đã mount và sẵn sàng để hiển thị
  }, []); // Chạy một lần duy nhất sau khi mount

  // Khi state `language` thay đổi, cập nhật bản dịch và lưu vào localStorage.
  useEffect(() => {
    // Chỉ thực hiện ở client để đảm bảo an toàn
    if (isMounted) {
      localStorage.setItem('language', language);
      setTrans(translations[language]);
    }
  }, [language, isMounted]); // Chạy mỗi khi `language` hoặc `isMounted` thay đổi

  // Hàm dịch
  const t = (key: string): any => {
    const keys = key.split('.');
    let result = trans;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return key; // Trả về key nếu không tìm thấy để dễ debug
      }
    }
    return result;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  // *** GIẢI PHÁP CHỐNG GIẬT LAG ***
  // Chỉ khi component đã được mount ở client và ngôn ngữ đã được xác định,
  // chúng ta mới render nội dung của trang.
  // Điều này ngăn việc hiển thị nội dung tiếng Việt mặc định trước khi đổi sang tiếng Anh.
  if (!isMounted) {
    return null; // Hoặc bạn có thể trả về một spinner loading toàn trang tại đây
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook để sử dụng context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
