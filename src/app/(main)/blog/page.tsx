import { getBlogPosts } from "../../../services/api";
import Image from "next/image";
import Link from "next/link";
// import { formatDate } from "../../../lib/utils";
import Card from "../../../components/ui/Card";

export const metadata = {
  title: "Blog - Chánh Thu Group",
  description: "Cập nhật tin tức mới nhất về ngành trái cây và hoạt động của Chánh Thu Group",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full transition-transform hover:-translate-y-1">
                <div className="relative aspect-video">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    {/* <time dateTime={post.date}>{formatDate(post.date)}</time> */}
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
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
