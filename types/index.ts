export interface Product {
  id: string;
  slug: string;
  category: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  technicalSpecs: {
    label: string;
    values: string[];
  }[];
  images: {
    url: string;
    alt: string;
  }[];
}

export interface NavItem {
  name: string;
  href: string;
  submenu?: NavItem[];
}

export interface ContactForm {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export interface BlogPost {
  date: string | undefined;
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    image?: string;
  };
  publishedAt: string;
  tags?: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  category: string;
  source?: string;
  tags?: string[];
}
