import { getBlogPost } from "../../../../services/api";
import Image from "next/image";
import { formatDate } from "../../../../lib/utils";
import { notFound } from "next/navigation";

interface Author {
  name: string;
  image?: string;
}

interface Post {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author | string;
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const post = await getBlogPost(params.slug);
  return {
    title: `${post.title} - Blog Chánh Thu Group`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug).catch(() => {
    notFound();
  });

  return (
    <article className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            {/* <time dateTime={post?.date}>{formatDate(post?.date)}</time> */}
            <span>•</span>
            <div className="flex items-center">
              {typeof post.author !== 'string' && post.author && (
                <Image
                  src={post.author}
                  alt={post.author}
                  width={24}
                  height={24}
                  className="rounded-full mr-2"
                />
              )}
              <span>{typeof post.author === 'string' ? post.author : post.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}


