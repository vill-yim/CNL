import React, { useEffect, useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import styles from "../../styles/header/desktopmenu.module.css";
import { allServiceStore } from "../../utils/serviceStore";


export const Navbar = () => {
  const location = useLocation();
  const [serviceSeleccionado, setServiceSeleccionado] = useState(null);
  const navigate = useNavigate();
  const { allServices } = allServiceStore();

  const handleServiceClick = async (idx) => {
    setServiceSeleccionado(idx);
    const serviceKeys = ["youtube", "studio", "uxui", "organic", "web"];
    await allServices(serviceKeys[idx]);
    localStorage.setItem("idx", idx);
    navigate("/services")
  };

  const isActive = (path) => {
    return location.pathname === path;
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
    <div className={styles["nav-header"]}>
      <nav>
        <ul>
          <li>
            <Link
              to={"/"}
              className={isActive("/") ? styles["link-select"] : styles["link-header"]}
            >
              Home
            </Link>
          </li>

          <li className={styles["dropdown"]}>
            <span
              className={`${location.pathname.includes("/services") ? styles["services-drop-select"] : styles["services-drop"]}`}
            >
              Services
              <div className={styles["flag-down"]}></div>
            </span>
            <ul className={`${styles["dropdown-menu"]}`}>
              <div className={`${styles["wraper-menu"]}`}>
                {[
                  "Youtube",
                  "Creative Studio",
                  "Ux/ui",
                  "Organic Growth",
                  "Web Design",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleServiceClick(idx)}
                    className={`${styles["dropdown-item"]} ${
                      serviceSeleccionado === idx ? styles["selected"] : ""
                    } ${!location.pathname.includes('services') && styles["none"] }`}
                  >
                    {item}
                  </li>
                ))}
              </div>
            </ul>
          </li>

          <li>
            <Link
              to={"/portfolio"}
              className={isActive("/portfolio") ? styles["link-select"] : styles["link-header"]}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};