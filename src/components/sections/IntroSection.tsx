import { CheckCircleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Chất Lượng Hàng Đầu",
    description: "Đạt tiêu chuẩn xuất khẩu quốc tế với chứng nhận Global G.A.P",
  },
  {
    title: "Nguồn Gốc Rõ Ràng",
    description: "Vùng trồng được kiểm soát chặt chẽ, truy xuất nguồn gốc minh bạch",
  },
  {
    title: "Công Nghệ Hiện Đại",
    description: "Áp dụng công nghệ cao trong bảo quản và đóng gói sản phẩm",
  },
  {
    title: "Xuất Khẩu Toàn Cầu",
    description: "Sản phẩm được xuất khẩu đi nhiều quốc gia trên thế giới",
  },
];

export default function IntroSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Về Chánh Thu Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chuyên cung cấp và xuất khẩu các loại trái cây nhiệt đới chất lượng cao
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold ml-2">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
