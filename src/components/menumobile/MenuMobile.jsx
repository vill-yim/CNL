import React from "react";
import { Navbar } from "../header/Navbar";
import styles from "../../styles/mobile/menumobile.module.css";

const RenderMobile = () => {
  return (
    <div className={styles["content-rendermenu"]}>
     
      <ul>
      </ul>
    </div>
  );
};

export const MenuMobile = () => {
  return <div className={styles["content-menu"]}>  <Navbar />  <RenderMobile /> </div>;
};

