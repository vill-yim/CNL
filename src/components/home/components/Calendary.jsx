import React from "react";
import styles from "../../../styles/home/calendary.module.css";
import {Calendly} from './Calendly'


export const Calendary = () => {
  return (
    <div className={styles["calendary-content"]}>
      <div className={styles["calendary-title"]}>
        <h3>About Us</h3>
      </div>
      <div className={styles["calendary-text"]}>
        <p>At the heart of everything we do is the unwavering belief in a future shaped by Bitcoin. A world where decentralization empowers individuals, sovereignty replaces control, and trust is no longer something to ask for but something embedded in the code. We see a future where innovation transcends barriers, where freedom flourishes, and where the financial system aligns with the principles of fairness and transparency.</p>
        <p>Our mission is to amplify the voices building this world. By empowering Bitcoin businesses with authentic, impactful marketing, we help them communicate their vision, grow their reach, and inspire the communities that believe in this movement. This isn’t just marketing. This is a movement. A fight for truth, for freedom, and for a future worth believing in. We’re here to ensure that the ethos of Bitcoin, the ethos of sovereignty and self-determination resonates in every corner of the world.</p>
      </div>

<div className={styles["calendary"]}>
<div className={styles["calendly-title"]}>
        <h3>Calendly</h3>
      </div>

      <Calendly />

</div>

    </div>
  );
};

