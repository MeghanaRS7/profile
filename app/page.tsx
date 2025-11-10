"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import WorkExperience from "@/components/sections/WorkExperience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import FunFacts from "@/components/sections/FunFacts";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
      <FunFacts />
      <Contact />
    </main>
  );
}
