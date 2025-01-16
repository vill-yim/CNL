import React from "react";
import styles from "../../../styles/home/outwork.module.css";
import { BtnSections } from "../../buttons/BtnSections";

export const OurWork = () => {
  return (
    <div className={styles["content-ourwork"]}>
      <div className={styles["title-outwork"]}>
        <h4>Our Work</h4>
      </div>
      <div className={styles["flexbox-ourwork"]}>
        <div className={styles["image1-ourwork"]}>
          <div className={styles["img-ourwork"]}></div>
        </div>

        <div className={styles["descriptions-ourwork"]}>
          <div className={styles["title-description-ourwork"]}>
            <h3>Turning Last-Minute Panic into Industry Domination</h3>
          </div>
          <div className={styles["text-description-ourwork"]}>
            <p>
              Bitcoin Mining World was on the brink of disaster. With just two
              weeks left before a major product launch at a high-profile
              conference, their previous agency had failed to deliver. The
              campaigns they received were generic, riddled with inaccuracies,
              and misaligned with Bitcoin’s ethos, leaving the team scrambling
              to find a solution. Time was running out, and their reputation was
              at stake. We stepped in and transformed the situation. In record
              time, we crafted a high-impact product video that perfectly
              captured their innovation and aligned with Bitcoin’s principles.
              The video became the centerpiece of their conference presentation,
              captivating the audience, driving an unprecedented surge in
              product sign-ups, and positioning Bitcoin Mining World as a
              dominant force in the industry and all delivered ahead of their
              tight deadline. This project wasn’t just a save, it was a
              game-changer.
            </p>
          </div>
        </div>
      </div>

      <div className={styles["flexbox-ourwork2"]}>
        <div className={styles["descriptions2-ourwork"]}>
          <div className={styles["title-description-ourwork"]}>
            <h3>Turning Last-Minute Panic into Industry Domination</h3>
          </div>
          <div className={styles["text-description-ourwork"]}>
            <p>
              Bitcoin Mining World was on the brink of disaster. With just two
              weeks left before a major product launch at a high-profile
              conference, their previous agency had failed to deliver. The
              campaigns they received were generic, riddled with inaccuracies,
              and misaligned with Bitcoin’s ethos, leaving the team scrambling
              to find a solution. Time was running out, and their reputation was
              at stake. We stepped in and transformed the situation. In record
              time, we crafted a high-impact product video that perfectly
              captured their innovation and aligned with Bitcoin’s principles.
              The video became the centerpiece of their conference presentation,
              captivating the audience, driving an unprecedented surge in
              product sign-ups, and positioning Bitcoin Mining World as a
              dominant force in the industry and all delivered ahead of their
              tight deadline. This project wasn’t just a save, it was a
              game-changer.
            </p>
          </div>
        </div>
        <div className={styles["image2-ourwork"]}>
          <div className={styles["img1-ourwork"]}></div>
        </div>
      </div>

     
     <div className={styles["btn-sec"]}>
           <BtnSections />
           </div>
    </div>
  );
};
