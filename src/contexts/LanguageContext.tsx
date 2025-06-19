'use client';

import { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';
import viTranslations from '@/lib/dictionaries/vi.json'; // Điều chỉnh đường dẫn nếu cần
import enTranslations from '@/lib/dictionaries/en.json'; // Điều chỉnh đường dẫn nếu cần
// Định nghĩa kiểu cho các ngôn ngữ được hỗ trợ
type Language = 'vi' | 'en';

// Định nghĩa kiểu cho object chứa các bản dịch
// Sử dụng `any` ở đây để linh hoạt với cấu trúc JSON lồng nhau
type Translations = { [key: string]: any };

const translations: Record<Language, Translations> = {
  vi: viTranslations,
  en: enTranslations,
};

// Định nghĩa kiểu cho giá trị của Context
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any; // Thay đổi: Hàm t có thể trả về bất kỳ kiểu dữ liệu nào
}

// 1. Tạo Context với kiểu đã định nghĩa
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Định nghĩa kiểu cho props của Provider
interface LanguageProviderProps {
  children: ReactNode;
}

// 2. Tạo Provider Component
export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');
  const [trans, setTrans] = useState<Translations>(translations[language]);

  // Effect để cập nhật bản dịch khi ngôn ngữ thay đổi
  useEffect(() => {
    setTrans(translations[language]);
  }, [language]);
  
  // Hàm dịch (translation function)
  const t = (key: string): any => { // Thay đổi: Kiểu trả về là any
    const keys = key.split('.');
    let result = trans;
    for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
            // Nếu không tìm thấy key, trả về chính key đó để dễ debug
            return key;
        }
    }
    return result; // Thay đổi: Trả về trực tiếp, không ép kiểu thành String
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Tạo custom hook để sử dụng context dễ dàng hơn
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
