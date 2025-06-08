import { getNews } from "../../../services/api";
import Image from "next/image";
import Link from "next/link";
import Card from "../../../components/ui/Card";

export const metadata = {
  title: "Tin Tức - Chánh Thu Group",
  description: "Cập nhật tin tức mới nhất về hoạt động của Chánh Thu Group",
};

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Tin Tức</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="group">
              <Card className="h-full transition-transform hover:-translate-y-1">
                <div className="relative aspect-video">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  {article.category && (
                    <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  {/* <time className="text-sm text-gray-500" dateTime={article.date}>
                    {formatDate(article.date)}
                  </time> */}
                  <h2 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
    );
  }
