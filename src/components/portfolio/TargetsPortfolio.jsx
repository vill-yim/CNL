import React from 'react'
import { ModalView } from '../modal/ModalView';
import styles from "../../styles/portfolio/portfolio.module.css";
import { useStoreView } from '../../utils/useStoreView';

export const TargetsPortfolio = ({ name, type, altimg, srcimg,modal }) => {
const {setView}= useStoreView()

  return (
      <div className={styles["projectfolio"]}>
 {modal}
        <div className={styles["img-project"]}>
          <div
            className={styles["img-proj"]}
            style={{ backgroundImage: `url(${srcimg})` }}
          ></div>
        </div>
        <div className={styles["info-projectfolio"]}>
          <div className={styles["name-projectfolio"]}> {name}</div>
          <div className={styles["type-projectfolio"]}>{type}</div>
        </div>
      </div>
    );
  };