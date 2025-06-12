import React from 'react';
import Image from 'next/image';
  const timelineEvents = [
    {
      year: 2022,
      icon: "🏭",
      title: "Mở rộng nhà máy đóng gói",
      description: "Công ty tiếp tục đầu tư mở rộng nhà máy tại các tỉnh Đak Lak, Tiền Giang, Đồng Nai với dây chuyền tiện biến và dây chuyền đóng gói sản xuất lên 300.000 tấn/năm với hệ thống máy móc, thiết bị hiện đại",
      color: "bg-blue-500"
    },
    {
      year: 2021,
      icon: "🏢",
      title: "Dofarming Fruit JSC",
      description: "Mở hình chuyển đổi từ Công ty TNHH MTV sang Công ty Cổ Phần Trái Cây (Công ty Cổ Phần Trái Cây Dofarming) với mục tiêu mở rộng thêm nhiều nhà máy đáp ứng chuẩn xuất khẩu",
      color: "bg-green-500"
    },
    {
      year: 2020,
      icon: "🏆",
      title: "Chứng nhận HALAL",
      description: "Dofarming đã xuất khẩu lô vải thiều đầu tiên sang Nhật Bản. Nhà máy đạt chứng nhận Halal",
      color: "bg-gray-500"
    },
    {
      year: 2019,
      icon: "📜",
      title: "Chứng nhận FSSC 22000",
      description: "Dofarming đạt được lô xuất đầu tiên sang Mỹ. Nhà máy đạt chứng chỉ FSSC 22000",
      color: "bg-green-500"
    },
    {
      year: 2012,
      icon: "🇺🇸",
      title: "USA Code",
      description: "Bộ Nông nghiệp Hoa Kỳ thẩm định và cấp mã số cho nhà đóng gói trái cây đảm bảo đủ điều kiện xuất khẩu vào thị trường Hoa Kỳ. Dofarming là công ty Việt Nam đầu tiên xuất khẩu thanh long chính thống sang thị trường Mỹ với số lượng lên đến 200 tấn",
      color: "bg-blue-500"
    },
    {
      year: 2009,
      icon: "🏢",
      title: "Dofarming Co.,Ltd",
      description: "Mở hình được chuyển đổi từ doanh nghiệp tư nhân thành công ty TNHH (Công ty TNHH Xuất nhập khẩu Trái cây Dofarming) với mục tiêu xây dựng nhà đóng gói, vườn cây an trái đạt tiêu chuẩn Việt Nam và Quốc tế mở rộng các thị trường khô tính hơn như, Pháp, Úc Canada và Hàn Quốc Trung Đông",
      color: "bg-green-500"
    },
    {
      year: 1997,
      icon: "🌱",
      title: "Doanh nghiệp tư nhân Dofarming",
      description: "Khởi nghiệp từ một người thu mua nhỏ, thu mua trái cây của nông dân trong vùng để bán cho các thương lái lớn hoặc các công ty khác. Năm 1997, DNTN Dofarming được thành lập, chuyên xuất khẩu trái cây sang Trung Quốc với số lượng xuất khẩu đạt 2000 tấn/năm",
      color: "bg-orange-500"
    }
  ];

  const businessFields = [
    {
      icon: "🛒",
      title: "Khách hàng",
      description: "Cung cấp các sản phẩm và dịch vụ với chất lượng tốt nhất"
    },
    {
      icon: "👥",
      title: "Nhân viên",
      description: "Phát triển bền vững và hiệu quả nhâm gia tăng giá trị lao động cho nhân viên"
    },
    {
      icon: "🌱",
      title: "Nông dân",
      description: "Liên kết chặt chẽ và hỗ trợ kỹ thuật tiên tiến để phát triển vùng trồng an toàn và nang cao giá trị sản phẩm và năng suất công của nông dân"
    },
    {
      icon: "🌍",
      title: "Xã hội",
      description: "Hoạt động sản xuất kinh doanh nghiêm với lời ích chung của xã hội, góp phần bảo vệ môi trường và xúc khác cộng đồng"
    }
  ];
export default function HistoryPage() {
  return (
<div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lịch sử & định hướng phát triển
          </h1>
          <nav className="text-sm opacity-90">
            <span>Home</span>
            <span className="mx-2">•</span>
            <span>Giới thiệu</span>
            <span className="mx-2">•</span>
            <span>Lịch sử & định hướng phát triển</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Timeline */}
          <div>
            <div className="mb-8">
              <span className="text-green-600 font-semibold text-lg">04</span>
              <h2 className="text-2xl font-bold text-gray-800 mt-2">Lịch sử</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Year Badge */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 text-sm z-10">
                      {event.year}
                    </div>
                    
                    {/* Content Card */}
                    <div className={`ml-6 p-6 rounded-lg shadow-lg ${event.color === 'bg-green-500' ? 'bg-green-500 text-white' : 'bg-white border border-gray-200'}`}>
                      <h3 className={`text-lg font-bold mb-3 ${event.color === 'bg-green-500' ? 'text-white' : 'text-gray-800'}`}>
                        {event.title}
                      </h3>
                      <p className={`leading-relaxed ${event.color === 'bg-green-500' ? 'text-white' : 'text-gray-600'}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Vision Section */}
            <div className="mb-12">
              <div className="mb-8">
                <span className="text-green-600 font-semibold text-lg">05</span>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">Định hướng kinh doanh</h2>
              </div>

              {/* Vision Card */}
              <div className="bg-green-600 text-white p-8 rounded-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <h3 className="text-xl font-bold">Tầm nhìn</h3>
                  </div>
                  <p className="leading-relaxed">
                    Năm 2025: Trở thành doanh nghiệp hàng đầu về phụ tùng 500 ty đồng cho việc 
                    chế biến và đóng gói trái cây tươi Việt Nam với tầm nhìn trở thành một nhà phân 
                    phối bán sản tự trái cây tại Đông Đak Lak với hơn 10 hecta nhằm phát 
                    triển xây dựng thủ tục của tỉnh Đồng Nai Đó và Thủ Nhận hoạt chính 
                    đầu rổng, chanh, đậy, tỏi chuối... cùng xuất nhà mày sau khi đi vào hoạt 
                    động là từ 70.000 tấn mỗi năm, (70.000 tấn/năm)
                  </p>
                  <p className="mt-4 leading-relaxed">
                    Mục tiêu đến năm 2025: Tập đoàn Dofarming trở thành doanh nghiệp 
                    có thể xưng cùng ung hơn 500.000 tấn sản phẩm trái cây các loại mỗi 
                    năm, cung cấp đủ dem và chất lượng có số lượng cho các thị trường siêu 
                    thị lớn bằng chuỗi thương hiệu trái cây "Dofarming – Made in Vietnam"
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Sứ mệnh</h3>
              <div className="grid grid-cols-2 gap-4">
                {businessFields.map((field, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{field.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{field.title}</h4>
                      <p className="text-sm text-gray-600">{field.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Giá trị cốt lõi</h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/api/placeholder/500/300"
                  alt="Core Values"
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>

            {/* Credibility Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Sự tin cậy</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sự đoàn kết</h4>
                  <p className="text-sm text-gray-600">
                    Mọi thành viên trong công ty phải làm trách
                    cùng hướng tới mục tiêu chung của tổ
                    chức. Để tiến kết điểm mạnh của mỗi cá
                    nhân, huy tối đa năng lực để đạt được
                    mục tiêu thành nhất, hiệu quả nhất.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sự tin cậy</h4>
                  <p className="text-sm text-gray-600">
                    Mọi thành viên trong công ty phải làm việc
                    liêm chính làm căn chỉ thính hưởng giao tiếp
                    và làm việc hàng ngày. Đây là yếu tố tạo
                    dựng niềm tin và sự tôn trọng giữa các
                    thành viên.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center">
            Thành viên ban quản trị
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
