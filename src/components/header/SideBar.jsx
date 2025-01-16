import React, { useEffect, useState } from "react";
import { sidebarStore } from "../../utils/sidebarstore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../../styles/header/sidebar.module.css";
import { serviceStore, allServiceStore } from "../../utils/serviceStore";

export const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sideBar } = sidebarStore();
  const { setServices, services } = serviceStore();
  const { allServices, youtube, studio, uxui, organic, web } =
    allServiceStore();
  const [serviceSeleccionado, setServiceSeleccionado] = useState();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleServiceClick = (idx) => {
    navigate("/services");
    setServiceSeleccionado(idx);
    const serviceKeys = ["youtube", "studio", "uxui", "organic", "web"];
    allServices(serviceKeys[idx]);
    localStorage.setItem("idx", idx);
  };

  useEffect(() => {
    (() => {
      const ix = localStorage.getItem("idx");
      let i = Number(ix)
      const keys = ["youtube", "studio", "uxui", "organic", "web"];
      const key = keys[i]
      allServices(key);
    })();
  }, []);

  return (
    <div
      className={`${sideBar ? styles["show-sidebar"] : styles["hide-sidebar"]}`}
    >
      <nav className={styles["nav-side"]}>
        <ul>
          <Link
            to={"/"}
            className={`${
              isActive("/") ? styles["seleccionado-side"] : styles["link-side"]
            }`}
            onClick={() => handleServiceClick()}
          >
            Home
          </Link>

          <li
            onClick={() => setServices()}
            className={`${
              isActive("/services")
                ? styles["seleccionado-side"]
                : styles["link-side"]
            }`}
          >
            <span>Services</span>
            <div className={styles["flag-down"]}></div>
          </li>
          <div
            className={`${
              services ? styles["list-service"] : styles["hide-services"]
            }`}
          >
            <ul>
              {[
                "Youtube",
                "Creative Studio",
                "Ux/ui",
                "Organic Growth",
                "Web Design",
              ].map((subItem, subIdx) => (
                <li
                  key={subIdx}
                  onClick={() => handleServiceClick(subIdx)}
                  className={
                    serviceSeleccionado === subIdx
                      ? styles["seleccionado-service"]
                      : styles["link-service"]
                  }
                >
                  {subItem}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={"/portfolio"}
            className={`${
              isActive("/portfolio")
                ? styles["seleccionado-side"]
                : styles["link-side"]
            }`}
            onClick={() => handleServiceClick()}
          >
            Portfolio
          </Link>
        </ul>
      </nav>
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
    </div>
  );
};
