"use client";

import Image from "next/image";

const stats = [
  { label: "Nhà máy", value: "120.000m2" },
  { label: "Sản lượng tấn/năm", value: "+300.000" },
  { label: "Năm kinh nghiệm", value: "+25" },
  { label: "Quốc gia nhập khẩu", value: "+20" },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/about/hero-about.jpg"
          alt="Giới thiệu Chánh Thu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Giới Thiệu</h1>
            <p className="text-lg md:text-xl">
              Tập đoàn xuất nhập khẩu trái cây hàng đầu Việt Nam
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Về Chúng Tôi</h2>
              <div className="prose prose-lg">
                <p>
                  Công ty Cổ phần Tập đoàn Xuất – Nhập Khẩu Trái Cây Chánh Thu tiền thân là Công ty TNHH Chánh Thu (tại tỉnh Bến Tre) là doanh nghiệp hoạt động trong lĩnh vực xuất khẩu trái cây tươi, trái cây đông lạnh đã có hơn 25 năm kinh nghiệm.
                </p>
                <p>
                  Với các nhà máy tại các tỉnh Bến Tre, Khánh Hòa và Đăk Lăk, Tập đoàn Chánh Thu có khả năng cung cấp hơn 200.000 tấn trái cây các loại trong năm xuất sang thị trường Mỹ, Nhật, Úc, Châu Âu, Trung Quốc, Hàn Quốc…
                </p>
              </div>
            </div>
            <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <Image
                src="/images/about/factory.jpg"
                alt="Nhà máy Chánh Thu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Chứng Nhận Tiêu Chuẩn</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="relative aspect-square">
              <Image
                src="/images/about/cert-fssc.jpg"
                alt="Chứng nhận FSSC 22000"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about/cert-haccp.jpg"
                alt="Chứng nhận HACCP"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about/cert-iso.jpg"
                alt="Chứng nhận ISO"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about/cert-global-gap.jpg"
                alt="Chứng nhận Global GAP"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Markets Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Thị Trường Xuất Khẩu</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["USA", "Japan", "Australia", "EU", "China", "Korea"].map((market) => (
              <div key={market} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={`/images/flags/${market.toLowerCase()}.png`}
                    alt={`Flag of ${market}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">{market}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
