import React from "react";
import styles from "../../../styles/home/wemake.module.css";

export const TargetWeMake = ({ number, title, text }) => {
  return (
    <div className={styles["target-wemake"]}>
      <div className={styles["content-target"]}>
        <div className={styles["number-target"]}>
      <b>
      <h4>{number}</h4>
        </b>
        </div>
        <div className={styles["title-target"]}>
          
          <h3>{title}</h3>
        </div>
        <div className={styles["text-target"]}>
          
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
