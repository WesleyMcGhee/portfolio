import { Box } from "@/components/Box/Box.component";
import styles from "./page.module.css";
import Image from "next/image";
import Headshot from "../../public/1631030987923.jpg"

export default function Home() {
  return (
    <div className={styles.page}>
      <Box>
      <div className={styles.introInnerCon}>
        <div>
          <h2>Wesley McGhee</h2>
          {/*If you don't change this I will cringe forever*/}
          <p>Hello, I am Wes!  I have been coding for the better part of 
            of 9 years pretty much, starting out with C++, and CodeBlocks.
            Starting in 2021 I started working at MWI where I currently still work
            I made this website to just be a blog
          </p>
        </div>
        <div>
          <Image className={styles.headshot} src={Headshot} alt="My Headshot" width={150} height={150} />
        </div>
      </div>
      </Box>
    </div>
  );
}
