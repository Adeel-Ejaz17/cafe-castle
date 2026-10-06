import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoBar } from './components/InfoBar';
import { AboutSection } from './components/AboutSection';
import { SignatureFood } from './components/SignatureFood';
import { MenuSection } from './components/MenuSection';
import { CoffeeSection } from './components/CoffeeSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#24211E] flex flex-col font-sans selection:bg-[#B58A52] selection:text-white">
      {/* Top Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Full-Screen Hero */}
        <Hero />

        {/* Quick Information Strip */}
        <InfoBar />

        {/* Brand / About Editorial Section */}
        <AboutSection />

        {/* Signature Food Spotlight */}
        <SignatureFood />

        {/* Comprehensive Verified Menu */}
        <MenuSection />

        {/* Specialty Coffee Craft Showcase */}
        <CoffeeSection />

        {/* Daytime Patio vs Evening Energy Atmosphere */}
        <ExperienceSection />

        {/* Curated Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Location & Directions */}
        <LocationSection />

        {/* Contact & Table Planning */}
        <ReservationSection />
      </main>

      {/* Premium Dark Footer */}
      <Footer />
    </div>
  );
}
