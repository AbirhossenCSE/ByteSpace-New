import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/home/Hero';
import PartnerLogos from '@/components/sections/home/PartnerLogos';
import CourseDiscovery from '@/components/sections/home/CourseDiscovery';
import LearningPaths from '@/components/sections/home/LearningPaths';
import GrowthSection from '@/components/sections/home/GrowthSection';
import ManageCourses from '@/components/sections/home/ManageCourses';
import CreatorCta from '@/components/sections/home/CreatorCta';
import Testimonials from '@/components/sections/home/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PartnerLogos />
        <CourseDiscovery />
        <LearningPaths />
        <GrowthSection />
        <ManageCourses />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
