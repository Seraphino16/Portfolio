import styles from "./styles/page.module.scss";
import HeroSection from "./components/sections/HeroSection";
import AboutMeSection from "./components/sections/AboutMeSection";

export default function Home() {
  return (
    <div className={styles.page}>
        <HeroSection />
        <AboutMeSection />
    </div>
  );
}
