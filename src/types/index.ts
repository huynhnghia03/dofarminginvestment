export interface Product {
  benefits: any;
  technicalSpecs: any;

  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price?: number;
  image: string;
  gallery?: string[];
  features?: string[];
  specifications?: {
    [key: string]: string;
  };
  isAvailable?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  coverImage: string ;
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsArticle {
  coverImage: string ;
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  isHighlighted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactForm {
  name: string;
  email?: string;
  phone: string;
  message: string;
}