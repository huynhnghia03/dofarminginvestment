"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
	{ id: "all", name: "Tất cả" },
	{ id: "fresh", name: "Trái cây tươi" },
	{ id: "frozen", name: "Trái cây đông lạnh" },
];

const products = [
	{
		name: "Sầu riêng cấp đông nguyên trái",
		brand: "DuriVy",
		slug: "sau-rieng-cap-dong-nguyen-trai-durivy",
		rating: 5,
		category: "frozen",
		description: "Sầu riêng nguyên trái đông lạnh, giữ nguyên hương vị",
	},
	{
		name: "DuriQueen - Sầu riêng cấp đông",
		slug: "duriqueen-sau-rieng-cap-dong-nguyen-trai",
		category: "frozen",
		description: "Sầu riêng đông lạnh thương hiệu DuriQueen",
	},
	{
		name: "Sầu Riêng",
		slug: "sau-rieng",
		rating: 5,
		category: "fresh",
		description: "Sầu riêng tươi, thu hoạch trong ngày",
	},
	{ name: "Xoài", slug: "xoai" },
	{ name: "Bưởi da xanh", slug: "buoi-da-xanh" },
	{ name: "Thanh Long", slug: "thanh-long" },
	{ name: "Nhãn", slug: "nhan" },
	{ name: "Dừa Tươi", slug: "dua-tuoi" },
	{ name: "Măng Cụt", slug: "mang-cut" },
	{ name: "Ổi", slug: "oi" },
	{ name: "Chôm chôm", slug: "chom-chom" },
	{ name: "Ớt", slug: "ot" },
	{ name: "Mận (Roi)", slug: "man-roi" },
	{ name: "Mít", slug: "mit" },
	{ name: "Dừa Khô", slug: "dua-kho" },
];

export default function Products() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredProducts = products.filter(
		(product) =>
			selectedCategory === "all" ||
			product.category === selectedCategory
	);

	return (
		<main className="flex min-h-screen flex-col bg-white">
			{/* Hero Section */}
			<div className="relative h-[40vh] w-full">
				<Image
					src="/images/products/hero-products.jpg"
					alt="Sản phẩm Chánh Thu"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50" />
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">Sản Phẩm</h1>
						<p className="text-lg md:text-xl">
							Trái cây tươi & đông lạnh chất lượng cao
						</p>
					</div>
				</div>
			</div>

			{/* Breadcrumb */}
			<div className="max-w-7xl mx-auto w-full px-4 py-4">
				<nav className="flex" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-3">
						<li className="inline-flex items-center">
							<Link
								href="/"
								className="text-gray-700 hover:text-primary"
							>
								Trang chủ
							</Link>
						</li>
						<li>
							<div className="flex items-center">
								<span className="mx-2 text-gray-400">/</span>
								<span className="text-gray-500">Sản phẩm</span>
							</div>
						</li>
					</ol>
				</nav>
			</div>

			{/* Category Filter */}
			<div className="max-w-7xl mx-auto w-full px-4 mb-8">
				<div className="flex flex-wrap gap-2">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setSelectedCategory(category.id)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
					selectedCategory === category.id
						? "bg-primary text-white"
						: "bg-gray-100 text-gray-700 hover:bg-gray-200"
				}
              `}
						>
							{category.name}
						</button>
					))}
				</div>
			</div>

			{/* Products Grid */}
			<section className="py-8 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{filteredProducts.map((product) => (
							<Link
								key={product.slug}
								href={`/san-pham/${product.slug}`}
								className="group"
							>
								<div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
									<Image
										src={`/images/products/${product.slug}.jpg`}
										alt={product.name}
										fill
										className="object-cover transform transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
								</div>
								<div className="mt-4 p-4 bg-white transition-transform duration-300 group-hover:-translate-y-1">
									<h3 className="text-center font-medium mb-2">
										{product.name}
									</h3>
									{product.brand && (
										<p className="text-center text-sm text-gray-600 mb-2">
											Thương hiệu {product.brand}
										</p>
									)}
									{product.description && (
										<p className="text-center text-sm text-gray-500 line-clamp-2">
											{product.description}
										</p>
									)}
									{product.rating && (
										<div className="flex justify-center mt-2">
											{[...Array(product.rating)].map((_, i) => (
												<svg
													key={i}
													className="h-5 w-5 text-yellow-400"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											))}
										</div>
									)}
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
