import Image from "next/image";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

export const metadata = {
  title: "Tuyển Dụng - Chánh Thu Group",
  description: "Cơ hội nghề nghiệp tại Chánh Thu Group - Nhà xuất khẩu trái cây hàng đầu Việt Nam",
};

const jobs = [
  {
    id: "jd-01",
    title: "Chuyên Viên Xuất Nhập Khẩu",
    department: "Phòng Xuất Nhập Khẩu",
    type: "Toàn thời gian",
    location: "TP. Hồ Chí Minh",
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Ngoại thương, Kinh tế đối ngoại",
      "Tiếng Anh thành thạo",
      "Kinh nghiệm 2 năm trong lĩnh vực xuất nhập khẩu",
    ],
    responsibilities: [
      "Thực hiện quy trình xuất nhập khẩu",
      "Làm việc với đối tác nước ngoài",
      "Quản lý và theo dõi đơn hàng",
    ],
  },
  {
    id: "jd-02",
    title: "Kỹ Sư Nông Nghiệp",
    department: "Phòng Kỹ Thuật",
    type: "Toàn thời gian",
    location: "Bến Tre",
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Nông nghiệp",
      "Kinh nghiệm trong lĩnh vực trồng trọt",
      "Hiểu biết về tiêu chuẩn Global G.A.P",
    ],
    responsibilities: [
      "Quản lý vùng trồng",
      "Tư vấn kỹ thuật cho nông dân",
      "Kiểm soát chất lượng sản phẩm",
    ],
  },
];

export default function RecruitmentPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Cơ Hội Nghề Nghiệp</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hãy tham gia cùng Chánh Thu Group để phát triển sự nghiệp trong
            ngành nông nghiệp xuất khẩu đầy tiềm năng
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Môi Trường Chuyên Nghiệp",
              description: "Làm việc trong môi trường năng động, chuyên nghiệp với đội ngũ nhiều kinh nghiệm",
            },
            {
              title: "Cơ Hội Phát Triển",
              description: "Nhiều cơ hội thăng tiến và phát triển kỹ năng thông qua các chương trình đào tạo",
            },
            {
              title: "Phúc Lợi Hấp Dẫn",
              description: "Chế độ lương thưởng cạnh tranh cùng các phúc lợi đa dạng cho nhân viên",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <h2 className="text-3xl font-bold mb-8">Vị Trí Tuyển Dụng</h2>
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>{job.department}</p>
                    <p>{job.location} • {job.type}</p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="mt-4 md:mt-0"
                  onClick={() => window.location.href = `mailto:hr@chanhthu.com?subject=Ứng tuyển ${job.title}`}
                >
                  Ứng Tuyển Ngay
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Yêu Cầu Công Việc</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mô Tả Công Việc</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
