import Image from "next/image";
import Link from "next/link";
// import { Card } from "@/components/ui/Card";

const featuredProducts = [
  {
    name: "Sầu Riêng",
    image: "/images/products/sau-rieng.jpg",
    href: "/products/tropical/sau-rieng",
  },
  {
    name: "Bưởi Da Xanh",
    image: "/images/products/buoi-da-xanh.jpg",
    href: "/products/citrus/buoi-da-xanh",
  },
  {
    name: "Thanh Long",
    image: "/images/products/thanh-long.jpg",
    href: "/products/tropical/thanh-long",
  },
  {
    name: "Xoài",
    image: "/images/products/xoai.jpg",
    href: "/products/tropical/xoai",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sản Phẩm Nổi Bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.name} href={product.href}>
              {/* <Card className="h-full transition-transform hover:-translate-y-1"> */}
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">
                    {product.name}
                  </h3>
                </div>
              {/* </Card> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
