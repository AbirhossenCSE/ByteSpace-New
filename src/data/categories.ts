import { Category } from '@/types';

export const learningPaths: Category[] = [
  { id: '1', name: 'Design', iconName: 'PenTool', courseCount: 85, slug: 'design' },
  { id: '2', name: 'Development', iconName: 'Code2', courseCount: 120, slug: 'development' },
  { id: '3', name: 'IT & Software', iconName: 'Laptop', courseCount: 95, slug: 'it-software' },
  { id: '4', name: 'Business', iconName: 'Building2', courseCount: 78, slug: 'business' },
  { id: '5', name: 'Marketing', iconName: 'Megaphone', courseCount: 65, slug: 'marketing' },
  { id: '6', name: 'Photography', iconName: 'Camera', courseCount: 42, slug: 'photography' },
];

export const categories = learningPaths;

export const discoveryFilterCategories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];
