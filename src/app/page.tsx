import { Box } from "@/components/Box/Box.component";
import styles from "./page.module.css";
import Image from "next/image";
import Headshot from "../../public/1631030987923.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <Box>
        <div className={styles.introInnerCon}>
          <div>
            <h2>Wesley McGhee</h2>
            {/*If you don't change this I will cringe forever*/}
            <p>
              I&apos;m Wesley McGhee, a software engineer at Midwestern
              Interactive. I&apos;ve been immersed in the world of software
              development for nine years, with three years of professional
              experience. I&apos;m driven by a desire to create impactful and
              efficient software solutions. My interests extend beyond the
              digital realm to include language learning, theological studies,
              and a general curiosity for acquiring new knowledge. I&apos;m also
              actively engaged in my local church community and find fulfillment
              in hands-on projects, whether they involve coding or hardware.
            </p>
          </div>
          <div>
            <Image
              className={styles.headshot}
              src={Headshot}
              alt="My Headshot"
              width={150}
              height={150}
            />
          </div>
        </div>
      </Box>
      <Box>
        <div>
          <h2>Experience</h2>
          <div className={styles.experienceContainer}>
            <div className={styles.experienceContent}>
              <h3>Midwestern Interactive</h3>
              <p>Dec. 2021 ~ Present</p>
              <sub>Software Engineer</sub>
            </div>
            <div className={styles.experienceContent}>
              <h3>Devmountain</h3>
              <p>Jun. 2021 ~ Aug. 2021</p>
              <sub>Student Engineer</sub>
            </div>
          </div>
        </div>
      </Box>
      <Box>
        <div>
          <h2>Projects</h2>
          <p>Coming Soon</p>
        </div>
      </Box>
    </div>
  );
}
