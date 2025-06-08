import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Chánh Thu Group - Xuất nhập khẩu trái cây",
  description: "Công ty Cổ phần Tập đoàn Xuất – Nhập Khẩu Trái Cây Chánh Thu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geist.variable} font-sans antialiased`}>

          <Header />
          {children}
          <Footer />

      </body>
    </html>
  );
}
