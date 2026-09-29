export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  originalPrice?: number;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  badge?: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  courseCount: number;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}
