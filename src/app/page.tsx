import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/home/Hero';
import PartnerLogos from '@/components/sections/home/PartnerLogos';
import BentoFeatures from '@/components/sections/home/BentoFeatures';
import CourseDiscovery from '@/components/sections/home/CourseDiscovery';
import LearningPaths from '@/components/sections/home/LearningPaths';
import GrowthSection from '@/components/sections/home/GrowthSection';
import ManageCourses from '@/components/sections/home/ManageCourses';
import Testimonials from '@/components/sections/home/Testimonials';
import FaqSection from '@/components/sections/home/FaqSection';
import CreatorCta from '@/components/sections/home/CreatorCta';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PartnerLogos />
        <BentoFeatures />
        <CourseDiscovery />
        <LearningPaths />
        <GrowthSection />
        <ManageCourses />
        <Testimonials />
        <FaqSection />
        <CreatorCta />
      </main>
      <Footer />
    </>
  );
}
