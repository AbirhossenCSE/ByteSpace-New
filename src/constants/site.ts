export interface SiteConfig {
  name: string;
  shortName: string;
  logoMark: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  mainNav: { title: string; href: string }[];
}

export const SITE_CONFIG: SiteConfig = {
  name: 'SkillSphere',
  shortName: 'SkillSphere',
  logoMark: 'S',
  tagline: 'Unlock Your Potential with World-Class Courses',
  description:
    'A modern online learning marketplace and creator ecosystem. Discover your passion, build job-ready skills, and learn from top industry leaders.',
  url: 'https://skillsphere.vercel.app',
  author: 'SkillSphere Team',
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Courses', href: '#courses' },
    { title: 'Learning Paths', href: '#paths' },
    { title: 'Growth', href: '#growth' },
    { title: 'Teach', href: '#manage-courses' },
    { title: 'Creators', href: '#creators' },
    { title: 'Reviews', href: '#testimonials' },
  ],
};

export default SITE_CONFIG;
