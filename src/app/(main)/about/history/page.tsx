import Image from "next/image";

export const metadata = {
  title: "Lịch Sử & Định Hướng - Chánh Thu Group",
  description: "Tìm hiểu về lịch sử phát triển và định hướng tương lai của Chánh Thu Group",
};

const milestones = [
  {
    year: "1997",
    title: "Thành lập công ty",
    description: "Chánh Thu được thành lập với tư cách là một doanh nghiệp chuyên về xuất khẩu trái cây.",
  },
  {
    year: "2005",
    title: "Mở rộng thị trường",
    description: "Bắt đầu xuất khẩu sang các thị trường Châu Á như Trung Quốc, Hàn Quốc.",
  },
  {
    year: "2015",
    title: "Đạt chứng nhận Global G.A.P",
    description: "Đạt chứng nhận Global G.A.P đầu tiên, mở ra cơ hội xuất khẩu sang các thị trường khó tính.",
  },
  {
    year: "2020",
    title: "Phát triển công nghệ",
    description: "Đầu tư vào công nghệ bảo quản và chế biến hiện đại, nâng cao chất lượng sản phẩm.",
  },
  {
    year: "2024",
    title: "Mở rộng quy mô",
    description: "Thành lập nhà máy chế biến mới, tăng công suất sản xuất và đa dạng hóa sản phẩm.",
  },
];

export default function HistoryPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Lịch Sử & Định Hướng Phát Triển
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <span className="text-primary font-bold text-lg">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Định Hướng Tương Lai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Phát triển bền vững",
                description: "Áp dụng các phương pháp canh tác bền vững, bảo vệ môi trường",
              },
              {
                title: "Mở rộng thị trường",
                description: "Tiếp cận các thị trường mới tại Châu Âu và Bắc Mỹ",
              },
              {
                title: "Đổi mới công nghệ",
                description: "Đầu tư vào công nghệ hiện đại trong sản xuất và chế biến",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
