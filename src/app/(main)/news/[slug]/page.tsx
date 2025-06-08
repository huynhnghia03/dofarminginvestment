import { getNewsArticle } from "../../../../services/api";
import Image from "next/image";
import { formatDate } from "../../../../lib/utils";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const article = await getNewsArticle(params.slug);
  return {
    title: `${article.title} - Tin Tức Chánh Thu Group`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const article = await getNewsArticle(params.slug).catch(() => {
    notFound();
  });

  return (
    <article className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          {article.category && (
            <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm mb-4">
              {article.category}
            </span>
          )}
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          {/* <time className="text-gray-600" dateTime={article.date}>
            {formatDate(article.date)}
          </time> */}
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}
