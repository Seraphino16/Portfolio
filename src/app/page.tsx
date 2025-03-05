import styles from "./styles/page.module.scss";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
    </div>
  );
}
