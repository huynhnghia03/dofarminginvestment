"use client";

import Image from "next/image";

  const timelineData = [
    { year: '2010', text: 'Thành lập công ty TNHH MTV Dofarming, khởi đầu hành trình chinh phục thị trường trái cây.' },
    { year: '2015', text: 'Mở rộng quy mô, đầu tư vào hệ thống kho lạnh và dây chuyền đóng gói hiện đại.' },
    { year: '2018', text: 'Lần đầu tiên xuất khẩu thành công lô hàng sầu riêng sang thị trường Hoa Kỳ.' },
    { year: '2020', text: 'Đạt chứng nhận GLOBALG.A.P., khẳng định chất lượng và an toàn sản phẩm theo tiêu chuẩn quốc tế.' },
    { year: '2023', text: 'Trở thành đối tác chiến lược của nhiều hệ thống siêu thị lớn trong và ngoài nước.' },
  ];

  const certifications = [
      { src: 'https://chanhthu.com/wp-content/uploads/2024/03/haccp-logo.png', alt: 'HACCP' },
      { src: 'https://chanhthu.com/wp-content/uploads/2024/03/global-gap-logo.png', alt: 'Global GAP' },
      { src: 'https://chanhthu.com/wp-content/uploads/2024/03/iso-22000-logo.png', alt: 'ISO 22000' },
      { src: 'https://chanhthu.com/wp-content/uploads/2024/03/halal-logo.png', alt: 'Halal' },
  ];

  const partners = [
      'https://chanhthu.com/wp-content/uploads/2024/03/logo-lotte-mart.png',
      'https://chanhthu.com/wp-content/uploads/2024/03/logo-emart.png',
      'https://chanhthu.com/wp-content/uploads/2024/03/logo-aeon.png',
      'https://chanhthu.com/wp-content/uploads/2024/03/logo-coopmart.png',
      'https://chanhthu.com/wp-content/uploads/2024/03/logo-bigc.png',
      'https://chanhthu.com/wp-content/uploads/2024/03/logo-mega-market.png',
  ];
const SectionTitle = ({ subtitle, title }: { subtitle: string; title: string }) => (
    <div className="text-center mb-12">
        <h3 className="text-lg font-bold text-green-600 uppercase tracking-wider">{subtitle}</h3>
        <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-800">{title}</h2>
    </div>
);
const TimelineItem = ({ year, text, isLeft }: { year: string; text: string; isLeft: boolean }) => (
    <div className={`flex items-center w-full my-6 md:my-0 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
        <div className="w-full md:w-1/2 px-4">
            <div className={`p-6 rounded-lg shadow-lg bg-white ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                <p className="text-2xl font-bold text-green-600">{year}</p>
                <p className="mt-2 text-gray-700">{text}</p>
            </div>
        </div>
    </div>
);

export default function About() {
  return (
    // <main className="flex min-h-screen flex-col bg-white">
    //   {/* Hero Section */}
    //   <div className="relative h-[50vh] w-full">
    //     <Image
    //       src="/images/about/hero-about.jpg"
    //       alt="Giới thiệu Dofarming"
    //       fill
    //       className="object-cover"
    //       priority
    //     />
    //     <div className="absolute inset-0 bg-black/50" />
    //     <div className="absolute inset-0 flex items-center justify-center">
    //       <div className="text-center text-white">
    //         <h1 className="text-4xl md:text-5xl font-bold mb-4">Giới Thiệu</h1>
    //         <p className="text-lg md:text-xl">
    //           Tập đoàn xuất nhập khẩu trái cây hàng đầu Việt Nam
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Introduction Section */}
    //   <section className="py-16 px-4">
    //     <div className="max-w-7xl mx-auto">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    //         <div className="space-y-6">
    //           <h2 className="text-3xl font-bold">Về Chúng Tôi</h2>
    //           <div className="prose prose-lg">
    //             <p>
    //               Công ty Cổ phần Tập đoàn Xuất – Nhập Khẩu Trái Cây Dofarming tiền thân là Công ty TNHH Dofarming (tại tỉnh Bến Tre) là doanh nghiệp hoạt động trong lĩnh vực xuất khẩu trái cây tươi, trái cây đông lạnh đã có hơn 25 năm kinh nghiệm.
    //             </p>
    //             <p>
    //               Với các nhà máy tại các tỉnh Bến Tre, Khánh Hòa và Đăk Lăk, Tập đoàn Dofarming có khả năng cung cấp hơn 200.000 tấn trái cây các loại trong năm xuất sang thị trường Mỹ, Nhật, Úc, Châu Âu, Trung Quốc, Hàn Quốc…
    //             </p>
    //           </div>
    //         </div>
    //         <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
    //           <Image
    //             src="/images/about/factory.jpg"
    //             alt="Nhà máy Dofarming"
    //             fill
    //             className="object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Stats Section */}
    //   <section className="bg-gray-50 py-16 px-4">
    //     <div className="max-w-7xl mx-auto">
    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    //         {stats.map((stat, index) => (
    //           <div key={index} className="text-center">
    //             <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
    //             <div className="text-gray-600">{stat.label}</div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Certifications Section */}
    //   <section className="py-16 px-4">
    //     <div className="max-w-7xl mx-auto">
    //       <h2 className="text-3xl font-bold mb-12 text-center">Chứng Nhận Tiêu Chuẩn</h2>
    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    //         <div className="relative aspect-square">
    //           <Image
    //             src="/images/about/cert-fssc.jpg"
    //             alt="Chứng nhận FSSC 22000"
    //             fill
    //             className="object-contain"
    //           />
    //         </div>
    //         <div className="relative aspect-square">
    //           <Image
    //             src="/images/about/cert-haccp.jpg"
    //             alt="Chứng nhận HACCP"
    //             fill
    //             className="object-contain"
    //           />
    //         </div>
    //         <div className="relative aspect-square">
    //           <Image
    //             src="/images/about/cert-iso.jpg"
    //             alt="Chứng nhận ISO"
    //             fill
    //             className="object-contain"
    //           />
    //         </div>
    //         <div className="relative aspect-square">
    //           <Image
    //             src="/images/about/cert-global-gap.jpg"
    //             alt="Chứng nhận Global GAP"
    //             fill
    //             className="object-contain"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Export Markets Section */}
    //   <section className="bg-gray-50 py-16 px-4">
    //     <div className="max-w-7xl mx-auto">
    //       <h2 className="text-3xl font-bold mb-12 text-center">Thị Trường Xuất Khẩu</h2>
    //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    //         {["USA", "Japan", "Australia", "EU", "China", "Korea"].map((market) => (
    //           <div key={market} className="text-center p-4 bg-white rounded-lg shadow-sm">
    //             <div className="relative w-20 h-20 mx-auto mb-4">
    //               <Image
    //                 src={`/images/flags/${market.toLowerCase()}.png`}
    //                 alt={`Flag of ${market}`}
    //                 fill
    //                 className="object-contain"
    //               />
    //             </div>
    //             <p className="font-medium">{market}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <div className="bg-white">
     <section className="relative h-64 bg-green-50 flex items-center justify-center">
        <Image 
          src="https://chanhthu.com/wp-content/uploads/2024/03/page-title-thingy.png"
          alt="Nền trang giới thiệu"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-extrabold text-gray-800">Giới thiệu</h1>
          <p className="text-gray-600 mt-2">Trang chủ / Giới thiệu</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <Image 
                src="https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-nha-may.jpg"
                alt="Nhà máy Dofarming"
                width={600}
                height={750}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-green-600 mb-4">Thư ngỏ</h2>
                <p>Công ty TNHH MTV Dofarming xin gửi lời chào trân trọng và lời chúc sức khỏe đến Quý khách hàng và Quý đối tác. Trải qua hơn một thập kỷ hình thành và phát triển, Dofarming tự hào là một trong những doanh nghiệp hàng đầu trong lĩnh vực xuất khẩu trái cây Việt Nam, mang những sản phẩm tinh túy của quê hương đến với bạn bè quốc tế.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sứ mệnh</h3>
                <p>Nâng tầm giá trị nông sản Việt, xây dựng thương hiệu trái cây Việt Nam uy tín, chất lượng trên thị trường toàn cầu, đồng thời góp phần cải thiện đời sống người nông dân.</p>
              </div>
               <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Tầm nhìn</h3>
                <p>Trở thành tập đoàn xuất khẩu trái cây hàng đầu Đông Nam Á, tiên phong trong việc áp dụng công nghệ cao vào sản xuất và quản lý, tạo ra chuỗi giá trị bền vững.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Hành trình" title="Lịch sử Hình thành & Phát triển" />
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-green-200"></div>
            {timelineData.map((item, index) => (
              <TimelineItem key={index} year={item.year} text={item.text} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
           <SectionTitle subtitle="Chất lượng" title="Chứng nhận & Giải thưởng" />
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
             {certifications.map((cert) => (
               <div key={cert.alt} className="flex justify-center">
                 <Image src={cert.src} alt={cert.alt} width={200} height={100} className="object-contain" />
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-24 bg-green-50">
        <div className="container mx-auto px-4">
           <SectionTitle subtitle="Hợp tác" title="Đối tác của chúng tôi" />
           <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center grayscale opacity-60">
             {partners.map((partnerSrc, index) => (
               <div key={index} className="flex justify-center">
                 <Image src={partnerSrc} alt={`Partner ${index + 1}`} width={150} height={80} className="object-contain" />
               </div>
             ))}
           </div>
        </div>
      </section>
      </div>
  );
}
