import { FooterLinkGroup } from '@/types';

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: 'f-1',
    title: 'Explore',
    links: [
      { label: 'Web Development', href: '#courses' },
      { label: 'UI/UX Design', href: '#courses' },
      { label: 'Data Science', href: '#courses' },
      { label: 'Business & Finance', href: '#courses' },
    ],
  },
  {
    id: 'f-2',
    title: 'Platform',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Become an Instructor', href: '#creators' },
      { label: 'Careers', href: '#' },
      { label: 'Blog & Insights', href: '#' },
    ],
  },
  {
    id: 'f-3',
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];
