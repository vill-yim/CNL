import React from "react";
import styles from "../../styles/footer/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["content-footer"]}>
      <div className={styles["logo-footer"]}>
        <div className={styles["lg-footer"]}></div>
      </div>
      <div className={styles["redes-footer"]}>
      <a
              target="blank"
              href="https://www.instagram.com/creativenetwork_21/"
              className={styles["red-ig"]}
            ></a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/creative-network-live/"
              className={styles["red-lkd"]}
            ></a>
            <a
              target="blank"
              href="https://twitter.com/cnl_btc21"
              className={styles["red-x"]}
            ></a>
      </div>
      <div className={styles["copy"]}>
        <h5>©2025, All right reserved.</h5>
      </div>
    </div>
  );
};
