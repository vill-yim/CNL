import React from "react";
import styles from "../../styles/services/services.module.css";

export const TargetService = ({ image_slider, name_slider }) => {
  return (
    <div className={styles["target-slider"]}>
     <div className={styles["img-slider"]}>
        <div
          className={styles["img-slider-background"]}
          style={{ backgroundImage: `url(${image_slider})` }}
        ></div>
      </div> 
      <div className={styles["content-target-slider"]}>
    
      <div className={styles["name-slider"]}>
        <h4>{name_slider}</h4>
      </div>
     </div>
    </div>
  );
};
