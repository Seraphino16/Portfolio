import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import ProjectSection from "@/components/projects/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
    </>
  );
}