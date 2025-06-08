import { getProduct } from "../../../../../services/api";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const product = await getProduct(params.slug);
  return {
    title: `${product.name} - Chánh Thu Group`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.slug).catch(() => {
    notFound();
  });

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full rounded-xl overflow-hidden mb-12">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {product.name}
            </h1>
          </div>
        </div>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Gallery */}
          <div className="space-y-6">
            {product.image && (
              <div 
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div>
            <div className="prose prose-lg max-w-none">
              <h2>Mô tả sản phẩm</h2>
              <p>{product.description}</p>

              {product.features && (
                <>
                  <h3>Đặc điểm nổi bật</h3>
                  <ul className="space-y-4 list-none pl-0">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {product.benefits && (
                <>
                  <h3>Công dụng</h3>
                  <ul className="space-y-4 list-none pl-0">
                    {product.benefits.map((benefit:string, index:number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Technical Specifications */}
              <h3>Thông số kỹ thuật</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    {product.technicalSpecs.map((spec: { label: string; values: string | string[] }, index: number) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{spec.label}</td>
                        <td className="py-3 px-4">
                          {Array.isArray(spec.values) 
                            ? spec.values.join(', ')
                            : spec.values}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
