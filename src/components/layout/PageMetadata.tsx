'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext'; // Điều chỉnh đường dẫn nếu cần

export function PageMetadata() {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Lấy tiêu đề và mô tả từ file ngôn ngữ
    const title = t('metadata.title');
    const description = t('metadata.description');

    // Cập nhật tiêu đề của trang
    if (title) {
      document.title = title;
    }

    // Tìm và cập nhật thẻ meta description
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag && description) {
      descriptionTag.setAttribute('content', description);
    }
    
    // Cập nhật thuộc tính lang của thẻ <html>
    document.documentElement.lang = language;

  }, [t, language]); // Chạy lại mỗi khi hàm t hoặc ngôn ngữ thay đổi

  // Component này không cần render bất cứ thứ gì ra giao diện
  return null;
}
