import React, { useState } from "react";
import { ModalView } from "../modal/ModalView";
import styles from "../../styles/portfolio/portfolio.module.css";

export const TargetsPortfolio = ({
  name,
  type,
  srcimg,
  modal,
  video,
  isVideo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={styles["projectfolio"]}
      onClick={() => setIsModalOpen(true)}
    >
      {isModalOpen && (
        <ModalView
          src={srcimg}
          video={video}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div className={styles["img-project"]}>
        {isVideo ? (
          <iframe
            className={styles["iframe"]}
            src={video}
            frameborder="0"
            allowfullscreen
          ></iframe>
        ) : (
          <img className={styles["img"]} src={srcimg} alt="" />
        )}
      </div>
      <div className={styles["info-projectfolio"]}>
        <div className={styles["name-projectfolio"]}>{name}</div>
        <div className={styles["type-projectfolio"]}>{type}</div>
      </div>
    </div>
  );
};
