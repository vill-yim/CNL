import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/header/header.module.css";
import { BtnHeader } from "../buttons/BtnHeader";
import { Navbar } from "./Navbar";
import { sidebarStore } from "../../utils/sidebarstore";

export const Header = () => {
  const navigate = useNavigate();
  const setSideBar = sidebarStore((state) => state.setSideBar);
  return (
    <div className={styles["header"]}>
   

      <Link to="/" className={styles["content-logo"]}>
        <div className={styles["logo"]}></div>
      </Link>

      <div className={styles["menu-header"]}>
        <Navbar />
      </div>

      <div className={styles["info-header"]}>
        <div className={styles["redes"]}>
          <ul>
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
          </ul>
        </div>

        <div className={styles["btn-header"]}>
          <BtnHeader text={"Contact Us"} />
        </div>
      </div>

      <div className={styles["menu-mobile"]} onClick={() => setSideBar()}>
      <div className={styles["btn-header"]}>
          <BtnHeader text={"Contact Us"} />
        </div>
        <img
          src="https://img.icons8.com/ios-filled/45/FFFFFF/menu--v1.png"
          alt=""
        />
      </div>
    </div>
  );
};
