import { Cover } from "./components/Cover";
import { WeMake } from "./components/WeMake";
import { Aboutus } from "./components/Aboutus";
import { OurWork } from "./components/OurWork";
import { OurProcess } from "./components/OurProcess";
import { Testimonials } from "./components/Testimonials";
import { Calendary } from "./components/Calendary";
import styles from '../../styles/home/home.module.css'

export const Home = () => {
  return (
    <div className={styles["home"]}>
      <div className={styles["cover"]}>
        <Cover />
      </div>

      <div className={styles["aboutus"]}>
        <Aboutus />
      </div>

      <div className={styles["wemake"]}>
        <WeMake />
      </div>

      <div className={styles["ourwork"]}>
        <OurWork />
      </div>
      <div className={styles["ourprocess"]}>
        <OurProcess />
      </div>

      <div className={styles["testimonials"]}>
        <Testimonials />
      </div>

      <div className={styles["calendary"]}>
        <Calendary />
      </div>
 
    </div>
  )
}
