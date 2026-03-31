"use client";

import PageHeader from "@/components/about/PageHeader";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/about/TeamSection";
import TestimonialSection from "@/components/about/TestimonialSection";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-page page-wrapper">
      <PageHeader />
      <AboutSection />
      <TeamSection />
      <TestimonialSection />
    </div>
  );
}
