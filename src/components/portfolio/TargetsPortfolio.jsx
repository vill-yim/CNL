import React, { useState } from 'react';
import { ModalView } from '../modal/ModalView';
import styles from "../../styles/portfolio/portfolio.module.css";

export const TargetsPortfolio = ({ name, type, srcimg, modal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={styles["projectfolio"]}
      onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic
    >
      {isModalOpen && (
        <ModalView
          src={srcimg}
          onClose={() => setIsModalOpen(false)} // Cierra el modal
        />
      )}
      <div className={styles["img-project"]}>
        <img className={styles["img"]} src={srcimg} alt="" />
      </div>
      <div className={styles["info-projectfolio"]}>
        <div className={styles["name-projectfolio"]}>{name}</div>
        <div className={styles["type-projectfolio"]}>{type}</div>
      </div>
    </div>
  );
};
