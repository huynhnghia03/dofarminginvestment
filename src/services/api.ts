import { Product, BlogPost, NewsArticle } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${API_URL}/blog`);
  if (!res.ok) throw new Error('Failed to fetch blog posts');
  return res.json();
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const res = await fetch(`${API_URL}/blog/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch blog post');
  return res.json();
}

export async function getNews(): Promise<NewsArticle[]> {
  const res = await fetch(`${API_URL}/news`);
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}

export async function getNewsArticle(slug: string): Promise<NewsArticle> {
  const res = await fetch(`${API_URL}/news/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch news article');
  return res.json();
}

export async function submitContactForm(data: string) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) throw new Error('Failed to submit form');
  return res.json();
}
