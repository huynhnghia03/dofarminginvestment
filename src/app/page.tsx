"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Play, Star } from "lucide-react";
import { HeroSection } from "@/components/sections";

const products = [
  {
    name: 'Sầu Riêng',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-sau-rieng-4-534x534.png',
    link: '/sau-rieng',
    rating: 5,
  },
  {
    name: 'Xoài',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-xoai-4-534x534.png',
    link: '/xoai',
    rating: 0,
  },
  {
    name: 'Bưởi da xanh',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/buoi-da-xanh-1-534x534.jpg',
    link: '/buoi-da-xanh',
    rating: 0,
  },
  {
    name: 'Nhãn',
    image: 'https://chanhthu.com/wp-content/uploads/2024/03/nhan-2-534x534.jpg',
    link: '/nhan',
    rating: 0,
  },
];

// Dữ liệu cho các lý do chọn Dofarming
const features = [
    {
        icon: 'https://chanhthu.com/wp-content/uploads/2024/03/farm-tractor.svg',
        text: 'Quy trình canh tác khoa học và chuyên nghiệp',
    },
    {
        icon: 'https://chanhthu.com/wp-content/uploads/2024/03/apple-fruit-healthy-juice-vegan-vegetarian.svg',
        text: '100% tươi sạch đạt an toàn vệ sinh thực phẩm',
    },
    {
        icon: 'https://chanhthu.com/wp-content/uploads/2024/03/quality.svg',
        text: 'Đạt tiêu chuẩn HACCP, FSSC 22000 và Halal',
    },
    {
        icon: 'https://chanhthu.com/wp-content/uploads/2024/03/chemical.svg',
        text: 'Kiểm soát đối với thực phẩm biến đổi gen',
    },
    {
        icon: 'https://chanhthu.com/wp-content/uploads/2024/03/clean.svg',
        text: 'Kiểm soát chất gây ô nhiễm trong thực phẩm',
    },
];

// Component Card sản phẩm
const ProductCard = ({ product }: { product: typeof products[number] }) => (
  <div className="group text-center rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative overflow-hidden">
      <Link href={product.link}>
        <Image
          src={product.image}
          alt={product.name}
          width={534}
          height={534}
          className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
    <div className="p-4 bg-white group-hover:bg-green-600 transition-colors duration-300">
      <div className="flex justify-center mb-2 h-5">
        {/* Sử dụng một map và class có điều kiện để đơn giản hóa */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`
              w-5 h-5 transition-colors
              ${i < product.rating
                ? 'text-yellow-400 fill-yellow-400' // Sao đã được đánh giá
                : 'text-gray-300 group-hover:text-white' // Sao trống, đổi màu khi hover
              }
            `}
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors">
        <Link href={product.link}>
          {product.name}
        </Link>
      </h3>
    </div>
  </div>
);

// Component Hero Slider
// const HeroSlider = () => {
//     const settings = {
//       dots: false,
//       arrows: false,
//       infinite: true,
//       speed: 1500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       fade: true,
//       cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
//     };


//     const slides = [
//         'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-sau-rieng-1.png',
//         'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-mit.png',
//         'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-buoi.png',
//         'https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-xoai.png'
//     ];

//     return (
//           <div className="slider-mask-container">
//             <Slider {...settings}>
//                 {slides.map((src, index) => (
//                     <div key={index} className="w-full h-full">
//                         <Image
//                             src={src}
//                             alt={`Slider image ${index + 1}`}
//                             width={630}
//                             height={700}
//                             className="object-cover w-full h-full"
//                             priority={index === 0}
//                         />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// Wrapper để chỉ render component trên client-side, tránh lỗi hydration của Next.js
// const ClientOnly = ({ children }:any) => {
//   const [hasMounted, setHasMounted] = useState(false);
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   if (!hasMounted) {
//     // Render một placeholder trong khi chờ mount để tránh layout shift
//     return <div className="slider-mask-container bg-gray-200"></div>;
//   }
//   return <>{children}</>;
// };
export default function Home() {
  //  const [currentSlide, setCurrentSlide] = useState(0)

  const fruits = [
    {
      id: 1,
      name: "Sầu riêng",
      image: "/images/products/chanh-thu-chom-chom.png",
      alt: "Sầu riêng chất lượng cao"
    },
    {
      id: 2,
      name: "Ổi",
      image: "/images/products/chanh-thu-oi.png",
      alt: "Ổi tươi ngon"
    },
    {
      id: 3,
      name: "Thanh long",
      image: "/images/products/chanh-thu-thanh-long.png",
      alt: "Thanh long xuất khẩu"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      // setCurrentSlide((prev) => (prev + 1) % fruits.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [fruits.length])

  return (
    <>
  
 
     <div className="bg-white">
      {/* Hero Section */}
        <style jsx global>{`
        .slider-mask-container {
            width: 100%;
            height: 700px;
            clip-path: url(#organic-clip-path);
            -webkit-clip-path: url(#organic-clip-path);
        }
        .slick-slide > div {
            height: 700px;
        }
        .about-large-image {
            border-top-left-radius: 8em;
            border-bottom-right-radius: 8em;
            overflow: hidden;
        }
        .about-small-image-container {
            border-top-left-radius: 60px;
            border-bottom-right-radius: 60px;
            overflow: hidden;
        }
             .play-button-ripple {
            position: relative;
        }
             .bg-video-thumbnail {
            background-image: url('https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-factory.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
          .play-button-ripple::before,
        .play-button-ripple::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.8);
            animation: ripple-effect 1.5s infinite ease-out;
            z-index: -1;
        }
        .play-button-ripple::after {
            animation-delay: -1s; /* Bắt đầu gợn sóng thứ hai sau 1s */
        }
        @keyframes ripple-effect {
          0% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
        <HeroSection />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-lg font-bold text-green-600 uppercase">
                Giá Trị & Sứ Mệnh
              </h3>
              <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-800">
                Công Ty Cổ Phần Tập Đoàn Xuất – Nhập Khẩu Trái Cây Dofarming
              </h2>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <p className="text-gray-600 italic">
                Chúng tôi đặt tiêu chí chất lượng sản phẩm và niềm tin của
                khách hàng lên hàng đầu cùng tuyên ngôn “Together We Make
                Vietnamese Fruit Brand” vững về chất lượng, mạnh về số lượng,
                xây dựng thương hiệu uy tín, hội nhập thị trường. Dofarming đã
                và đang từng bước đưa thương hiệu trái cây Việt Nam vươn xa
                trên thị trường thế giới.
              </p>
               <div className="mt-6">
                    <Image src="https://chanhthu.com/wp-content/uploads/2024/03/signature.png" alt="Chữ ký CEO" width={150} height={45} />
                    <p className="text-sm text-gray-700 font-semibold">CEO Dofarming</p>
               </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start mt-16">
            <div>
                 <Image src="https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-sau-rieng-3.png" width={630} height={700} alt="Vườn sầu riêng" className="rounded-lg shadow-lg about-large-image " />
            </div>
            <div className="space-y-8">
                 <div className="grid sm:grid-cols-2 gap-6">
                     <div className="bg-[#F9FFF8] rounded-lg shadow-md overflow-hidden">
                        <Image src="https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-cac-loai-trai-cay-1.png" width={630} height={700} alt="Tươi sạch & đảm bảo" className="w-full h-40 object-cover about-small-image-container" />
                        <div className="p-4">
                            <h4 className="font-bold text-gray-800">Tươi sạch & đảm bảo</h4>
                            <p className="text-sm text-gray-600 mt-1">100% nông sản tươi sạch chất lượng đồng đều với chi phí hợp lý</p>
                        </div>
                     </div>
                     <div className="bg-[#F9FFF8] rounded-lg shadow-md overflow-hidden">
                        <Image src="https://chanhthu.com/wp-content/uploads/2024/03/chanh-thu-cac-loai-trai-cay-1-1.png" width={630} height={700} alt="Quy trình nghiêm ngặt" className="w-full h-40 object-cover about-small-image-container" />
                        <div className="p-4">
                            <h4 className="font-bold text-gray-800">Quy trình nghiêm ngặt</h4>
                            <p className="text-sm text-gray-600 mt-1">Quy trình canh tác và thu hoạch an toàn, chất lượng vệ sinh thực phẩm</p>
                        </div>
                     </div>
                 </div>
                 <div>
                    <h3 className="text-2xl font-extrabold text-gray-800">Vì sao Dofarming là lựa chọn của bạn?</h3>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {features.map((feature, index) => (
                             <div key={index} className="flex items-start gap-4">
                                 <div className="flex-shrink-0">
                                    <Image src={feature.icon} alt="" width={40} height={40} />
                                 </div>
                                 <p className="text-gray-700">{feature.text}</p>
                             </div>
                        ))}
                    </div>
                 </div>
            </div>
          </div>

        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-bold text-green-600 uppercase">
              Giới Thiệu Sản Phẩm
            </h3>
            <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-800">
              Các Mặt Hàng Trái Cây Xuất Khẩu
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Xem sản phẩm khác <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Video & Stats Section */}
     <section className="container mx-auto px-4 lg:px-8 pb-16 lg:pb-24">
            <div className="relative rounded-lg overflow-hidden h-[250px] md:h-[450px] flex items-center justify-center bg-video-thumbnail">
                 <Image
                    src="/images/thumnailvideo.jpg"
                    alt="Nhà máy Dofarming"
                    fill
                    className="z-1 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <a href="https://www.youtube.com/watch?v=csqpwWFnoaQ" target="_blank" rel="noopener noreferrer" className="play-button-ripple relative z-10 w-15 h-15 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/50 transition-colors">
                    <Play className="w-7 h-7 md:w-8 md:h-8 text-[#1f9e2e] fill-current" />
                </a>
            </div>
            <div className="relative bg-white shadow-lg rounded-lg -mt-16 p-6 md:p-8 z-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center divide-x divide-gray-200">
                    <div className="px-2">
                        <h4 className="text-2xl md:text-4xl font-bold text-green-600">120.000m²</h4>
                        <p className="text-sm md:text-base text-gray-600 mt-1">Nhà máy đóng gói</p>
                    </div>
                     <div className="px-2">
                        <h4 className="text-2xl md:text-4xl font-bold text-green-600">+200.000</h4>
                        <p className="text-sm md:text-base text-gray-600 mt-1">Sản lượng tấn/năm</p>
                    </div>
                     <div className="px-2">
                        <h4 className="text-2xl md:text-4xl font-bold text-green-600">+25</h4>
                        <p className="text-sm md:text-base text-gray-600 mt-1">Năm kinh nghiệm</p>
                    </div>
                     <div className="px-2">
                        <h4 className="text-2xl md:text-4xl font-bold text-green-600">+20</h4>
                        <p className="text-sm md:text-base text-gray-600 mt-1">Quốc gia nhập khẩu</p>
                    </div>
                </div>
            </div>
       </section>


    </div>
       </>
  )
}
