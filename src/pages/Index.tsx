
import { useEffect, useState } from 'react';
import { Check, Scale, Users, FileText, MessageSquare, Phone, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import AppointmentBanner from '@/components/AppointmentBanner';
import AboutSection from '@/components/AboutSection';
import AnimatedCounters from '@/components/AnimatedCounters';
import WorkflowProcess from '@/components/WorkflowProcess';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import BlogTeaser from '@/components/BlogTeaser';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <AppointmentBanner />
      <AboutSection />
      <AnimatedCounters />
      <WorkflowProcess />
      <TestimonialsSlider />
      <BlogTeaser />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
