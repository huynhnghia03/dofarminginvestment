"use client";
import Image from "next/image";
import Link from "next/link";


export default function CertificatesPage() {
  return (
       <>
    <style jsx global>{`
         .bg-video-thumbnail {
            background-image: url('/images/about/dofarming-factory.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-position: 0% 0%;
    }
     
             .separate {
            font-size: 0; /* Ẩn nội dung văn bản bên trong */
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #209e2e;
            opacity: 1;
            margin: 0 12px;
            position: relative; /* Thêm position relative để căn chỉnh */
            top: -2px; /* Căn chỉnh vị trí */
            border-top-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
       
      `}</style>
     <div className="bg-white">
      {/* Hero Section */}
     
        <div className="relative h-64 md:h-80 w-full">
            <div className="bg-video-thumbnail absolute inset-0 bg-cover bg-center  bg-video-thumbnail">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white min-h-[430px]">
              <h1 className="text-4xl md:text-5xl font-bold">Chứng nhận tiêu chuẩn</h1>
              <nav className="mt-2 text-lg flex items-center">
                <Link href="/">Home</Link>
                <span className="separate"></span>
                  <Link href="/about">Giới thiệu</Link>
                  <span className="separate"></span>
                  <span>Chứng nhận tiêu chuẩn</span>
              </nav>
            </div>
        </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-green-600 font-semibold text-lg">03</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Tiêu chuẩn xuất khẩu
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            {/* Safety Promise Box */}
            <div className="bg-green-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Lời hứa an toàn</h3>
              <p className="leading-relaxed">
                Với phương châm "Mỗi sản phẩm là một niềm tin", chúng tôi cam kết mạnh mẽ về an 
                toàn và sinh thực phẩm ở mọi khâu: từ trồng trọt đến chế biến đóng gói và vận chuyển. 
                Sản phẩm của chúng tôi chứng tôi có cam kết đặng cấp các sản phẩm an toàn, tươi ngon 
                phù hợp với từng khách hàng và tiêu dùng, các nhà máy của Dofarming đều áp dụng 
                hệ thống quản lý chất lượng và đảm bảo chất lượng và sinh an toàn thực phẩm, 
                đạt ứng tiêu chuẩn quốc tế và đầu các chứng nhận như FSSC 22000, Halal, HACCP
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-12">
              {/* HACCP */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src="https://chanhthu.com/wp-content/uploads/2024/06/GGAP.webp"
                      alt="HACCP Certification"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-3">HACCP</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tại Dofarming, chúng tôi kiểm soát quy trình sản xuất một cách nghiêm ngặt từ khâu 
                    ban đầu, phân tích mối nguy độ âm bảo an toàn thực phẩm trong hoạt động của mình. 
                    Những sản phẩm đạt tiêu chuẩn HACCP về hệ thống quản lý chất lượng do tự ban CODEX 
                    (tổ chức do FAO và WHO thành lập) phát triển sẽ bảo đảm được mức độ an toàn về sinh 
                    thực phẩm, tạo niềm tin vệ chất lượng sản phẩm trái cây Dofarming - Made in 
                    Vietnam cho đối tác và khách hàng
                  </p>
                </div>
              </div>

              {/* FSSC 22000 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src="https://chanhthu.com/wp-content/uploads/2024/06/fssc__nqa_viet_nam.webp"
                      alt="FSSC 22000 Certification"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-3">FSSC 22000</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Sản phẩm được đóng gói theo tiêu chuẩn FSSC 22000 để xuất khẩu đi những thị trường khó tính 
                    như Mỹ, Úc, New Zealand. Đạt vệ trải cây được nuôi trồng và chăm sóc có lý quản trường hợp hệ thống 
                    quản lý còn quan trọng hơn. Không những chú trọng vào quá trình chung thông, Dofarming Group luôn chú trọng 
                    vào quá trình hệ thống chế biến và bảo quản sản phẩm. Chúng tôi đảm bảo an toàn thực phẩm thông 
                    qua việc xác định, đánh giá và kiểm soát các rủi ro, mối nguy trong suốt quá trình chế biến, sản xuất, 
                    đóng gói, bảo quản, vận chuyển và phân phối sản phẩm đến tay khách hàng
                  </p>
                </div>
              </div>

              {/* HALAL */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src="https://chanhthu.com/wp-content/uploads/2024/06/1582015726_Logo-chung-nhan-HALAL-HCA-Vietnam.jpg"
                      alt="Halal Certification"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-3">HALAL</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Chứng nhận Halal - chứng nhận cho các sản phẩm được phép sử dụng bởi người Hồi giáo. 
                    Trong quá trình sản xuất, chế biến, sản phẩm không bao gồm các sản phẩm hoặc quy trình khác 
                    có chứa động vật hoặc phụ phẩm động vật. Tại nhà máy của chúng tôi, tất cả các sản phẩm trái 
                    cây đều đáp ứng yêu cầu về nguyên liệu đầu tiêu chuẩn sản xuất và đáp ứng các yêu cầu của tiêu 
                    chuẩn Halal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:sticky lg:top-8">
            <Image
              src="https://chanhthu.com/wp-content/uploads/2024/06/chanh-thu-factory.webp"
              alt="Food processing facility"
              width={600}
              height={800}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Certificates Gallery */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* FSSC 22000 Certificate */}
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://chanhthu.com/wp-content/uploads/2024/06/FSSC-22000.jpg"
                  alt="FSSC 22000 Certificate"
                  width={300}
                  height={400}
                  className="w-full"
                />
              </div>
              <h5 className="mt-4 font-semibold text-gray-800">FSSC 22000</h5>
            </div>

            {/* HACCP Certificate */}
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://chanhthu.com/wp-content/uploads/2024/06/HACCP.jpg"
                  alt="HACCP Certificate"
                  width={300}
                  height={400}
                  className="w-full"
                />
              </div>
              <h5 className="mt-4 font-semibold text-gray-800">HACCP</h5>
            </div>

            {/* HALAL Certificate */}
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://chanhthu.com/wp-content/uploads/2024/06/HALAL.jpg"
                  alt="HALAL Certificate"
                  width={300}
                  height={400}
                  className="w-full"
                />
              </div>
              <h5 className="mt-4 font-semibold text-gray-800">HALAL</h5>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href="/about/history" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center">
            Lịch sử & định hướng phát triển
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
