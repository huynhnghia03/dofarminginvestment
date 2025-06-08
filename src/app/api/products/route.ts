import { NextResponse } from "next/server";

const mockProducts = [
  {
    id: "1",
    slug: "buoi-da-xanh",
    name: "Bưởi Da Xanh",
    category: "citrus",
    description: "Bưởi Da Xanh Bến Tre - đặc sản nổi tiếng của vùng đất phương Nam",
    images: [
      { url: "/images/products/buoi-da-xanh.jpg", alt: "Bưởi Da Xanh" }
    ],
    features: [
      "Trái bưởi da xanh nặng trung bình từ 1,2 đến trên 1,4 kg/trái",
      "Vỏ có màu xanh đến xanh hơi vàng khi chín",
      "Vỏ quả dễ bóc và khá mỏng",
      "Tép bưởi màu hồng đỏ, bó chặt"
    ],
    technicalSpecs: [
      { label: "Brix", values: ["10 – 13%"] },
      { 
        label: "Size", 
        values: [
          "Type 1: 1.4 – 1.8kg",
          "Type 2: 1.2 – 1.4kg",
          "Type 3: <1.2kg"
        ]
      }
    ]
  },
  // Add more products here
];

export async function GET(
  request: Request,
  { params }: { params: { slug?: string } }
) {
  if (params.slug) {
    const product = mockProducts.find(p => p.slug === params.slug);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  }

  return NextResponse.json(mockProducts);
}
