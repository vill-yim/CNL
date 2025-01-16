import React from "react";
import styles from "../../../styles/home/about.module.css";

export const RenderAboutus = ({clase,title,text}) => {
  return (
    <div className={styles["render-content-abouts"]}>
      <div className={styles["render-number-abouts"]}>
        <div className={styles[clase]}></div>
      </div>
      <div className={styles["render-title-abouts"]}>
        <h4>{title}</h4>
      </div>
      <div className={styles["render-text-abouts"]}>
        {text}
      </div>
    </div>
  );
};
