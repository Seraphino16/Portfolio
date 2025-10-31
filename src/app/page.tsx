import styles from "./styles/page.module.scss";
import HeroSection from "./components/sections/HeroSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import ProjectSection from "@/app/components/sections/ProjectSection";
import FormSection from "@/app/components/sections/FormSection";
import Navbar from "@/app/components/navbar/Navbar";

export default function Home() {
  return (
        <div className={styles.page}>
            <Navbar />
            <HeroSection />
            <AboutMeSection />
            <ProjectSection />
            <FormSection />
        </div>
  );
}
