import { Navbar } from "@/components/NavBar/Navbar.component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
    </div>
  );
}
