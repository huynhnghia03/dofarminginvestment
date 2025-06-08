'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Thanh Long Ruột Đỏ',
    image: '/images/products/thanh-long.jpg',
    description: 'Thanh long ruột đỏ tươi ngon, giàu dinh dưỡng',
    href: '/products/fruits/thanh-long',
  },
  {
    id: 2,
    name: 'Xoài Cát Hòa Lộc',
    image: '/images/products/xoai.jpg',
    description: 'Xoài cát Hòa Lộc thơm ngon, chín mọng',
    href: '/products/fruits/xoai',
  },
  {
    id: 3,
    name: 'Sầu Riêng',
    image: '/images/products/sau-rieng.jpg',
    description: 'Sầu riêng Ri6 thơm ngon béo ngậy',
    href: '/products/fruits/sau-rieng',
  },
  {
    id: 4,
    name: 'Mít',
    image: '/images/products/mit.jpg',
    description: 'Mít Thái thơm ngon, chín vàng',
    href: '/products/fruits/mit',
  },
];

export default function ProductSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Sản phẩm nổi bật</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trái cây tươi ngon
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sản phẩm được trồng và chăm sóc theo tiêu chuẩn nghiêm ngặt,
            đảm bảo chất lượng cao nhất cho thị trường trong nước và xuất khẩu.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">
                  <Link href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 flex justify-between">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-x-2 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Chi Tiết
                    <ArrowRight className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-x-2 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Xem tất cả sản phẩm
            <ArrowRight className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
