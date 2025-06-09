import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src="/images/logo.png"
            alt="Dofarming Logo"
            fill
            className="object-contain opacity-50"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">404 - Không Tìm Thấy Trang</h1>
        <p className="text-gray-600 mb-8">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
}
