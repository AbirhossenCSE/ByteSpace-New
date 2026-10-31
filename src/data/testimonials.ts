import { Testimonial } from '@/types';
import { SITE_CONFIG } from '@/constants/site';

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/images/testimonials/avatar-sarah.png',
    content: `${SITE_CONFIG.name} has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.`,
    rating: 5,
  },
  {
    id: 't-2',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/images/testimonials/avatar-james.png',
    content: `I've tried several online learning platforms, and ${SITE_CONFIG.name} stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.`,
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/images/testimonials/avatar-alex.png',
    content: `As a creator, ${SITE_CONFIG.name} has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.`,
    rating: 5,
  },
];
