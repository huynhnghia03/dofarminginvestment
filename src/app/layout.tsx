import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { PageMetadata } from "@/components/layout/PageMetadata"; 
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  // title: "Dofarming Group - Xuất nhập khẩu trái cây",
  // description: "Công ty Cổ phần Tập đoàn Xuất – Nhập Khẩu Trái Cây Dofarming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Xóa thuộc tính lang="vi" tĩnh ở đây
    <html>
      <body className={`${geist.variable} font-sans antialiased`}>
        <LanguageProvider>
          <PageMetadata /> {/* 4. Thêm PageMetadata vào đây */}
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
