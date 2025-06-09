import Image from "next/image";

export const metadata = {
  title: "Chứng Nhận Tiêu Chuẩn - Dofarming Group",
  description: "Các chứng nhận quốc tế về chất lượng và quy trình sản xuất của Dofarming Group",
};

const certificates = [
  {
    id: 1,
    name: "GLOBAL G.A.P",
    image: "/images/about/certificates/global-gap.jpg",
    description: "Chứng nhận thực hành nông nghiệp tốt toàn cầu, đảm bảo sản phẩm đáp ứng các tiêu chuẩn quốc tế về an toàn thực phẩm.",
    issueDate: "2024",
  },
  {
    id: 2,
    name: "ISO 22000:2018",
    image: "/images/about/certificates/iso-22000.jpg",
    description: "Chứng nhận hệ thống quản lý an toàn thực phẩm, đảm bảo quy trình sản xuất và chế biến đạt tiêu chuẩn quốc tế.",
    issueDate: "2023",
  },
  // Thêm các chứng nhận khác
];

export default function CertificatesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Chứng Nhận Tiêu Chuẩn
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <p className="text-sm text-gray-500">
                  Cấp năm: {cert.issueDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Cam Kết Chất Lượng
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Dofarming Group luôn đặt chất lượng sản phẩm lên hàng đầu. Chúng tôi
              tự hào khi đạt được các chứng nhận quốc tế quan trọng, khẳng định
              năng lực và uy tín của doanh nghiệp trong lĩnh vực xuất khẩu trái cây.
            </p>
            <p>
              Các chứng nhận này không chỉ là minh chứng cho quy trình sản xuất
              đạt chuẩn mà còn thể hiện cam kết của chúng tôi trong việc cung cấp
              sản phẩm chất lượng cao, an toàn cho người tiêu dùng và thân thiện
              với môi trường.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
