'use client';

import { PhoneCall, Award, Leaf, Globe } from 'lucide-react';

const features = [
  {
    name: 'Chất lượng hàng đầu',
    description: 'Sản phẩm đạt chuẩn xuất khẩu, quy trình sản xuất nghiêm ngặt',
    icon: Award,
  },
  {
    name: 'Nông nghiệp bền vững',
    description: 'Áp dụng công nghệ cao trong sản xuất, thân thiện với môi trường',
    icon: Leaf,
  },
  {
    name: 'Xuất khẩu toàn cầu',
    description: 'Sản phẩm được xuất khẩu đi nhiều quốc gia trên thế giới',
    icon: Globe,
  },
  {
    name: 'Hỗ trợ 24/7',
    description: 'Đội ngũ chăm sóc khách hàng chuyên nghiệp, tận tâm',
    icon: PhoneCall,
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Giá trị cốt lõi</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dofarming Group
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Với hơn 20 năm kinh nghiệm trong lĩnh vực xuất nhập khẩu trái cây, chúng tôi tự hào mang đến những sản phẩm chất lượng cao cho khách hàng trong và ngoài nước.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
