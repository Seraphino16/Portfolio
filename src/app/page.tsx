import styles from "./styles/page.module.scss";
import HeroSection from "./components/sections/HeroSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import ProjectSection from "@/app/components/sections/ProjectSection";

export default function Home() {
  return (
    <div className={styles.page}>
        <HeroSection />
        <AboutMeSection />
        <ProjectSection />
    </div>
  );
}
