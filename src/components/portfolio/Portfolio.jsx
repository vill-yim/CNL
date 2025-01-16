import React, { useEffect } from "react";
import { useState } from "react";
import { TargetsPortfolio } from "./TargetsPortfolio";
import { ModalView } from "../modal/ModalView";
import styles from "../../styles/portfolio/portfolio.module.css";
import { portfolioStore } from "../../utils/changePortfolio";

export const Portfolio = () => {
  const [seleccionado, setSeleccionado] = useState(0);
  const { social, motion, design, d3, showPortfolio } = portfolioStore();

  useEffect(() => {
    showPortfolio("design");
  }, []);

  const handleClick = (i) => {
    setSeleccionado(i);
    const portfolio = ["design", "social", "motion", "d3"];
    showPortfolio(portfolio[i]);
  };

  return (
    <div className={styles["content-portfolio"]}>
      <div className={styles["cover-portfolio"]}>
        <div className={styles["title-portfolio"]}>
          <h4>Portfolio</h4>
        </div>
        <div className={styles["description-portfolio"]}>
          <p>
            Our work process is based on the concept of strategic creativity. We
            combine aesthetics and functionality; intuition and analysis; trend
            and experience.
          </p>
        </div>
      </div>
      <div className={styles["show-portfolios"]}>
        <div className={styles["header-portfolio"]}>
          <ul className="header-portfolio">
            {["Design", "Social", "Motion", "3D"].map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={seleccionado === index ? styles["seleccionado"] : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {design && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"Bitcoin Park"}
              type={"Poster"}
              svg={"../../../public/portfolio/btcpark.svg"}
              srcimg={"https://i.ibb.co/kcg8GFT/Bitcoin-Park-1.png"}
            />
            <TargetsPortfolio
              name={"MYNODE"}
              type={"Social Media"}
              svg={"../../../public/portfolio/blackf.svg"}
              srcimg={"https://i.ibb.co/wppy1Kp/minode.png"}
            />
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Poster"}
              srcimg={"https://i.ibb.co/wBHTxGw/btcompany.png"}
            />
            <TargetsPortfolio
              name={"Bitcoin Park"}
              type={"Poster"}
              srcimg={"https://i.ibb.co/3zSB1q2/btpark.png"}
            />
            <TargetsPortfolio
              name={"MYNODE"}
              type={"Social Media"}
              srcimg={"https://i.ibb.co/bFnsCqZ/mynode2.png"}
            />
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Btc Company"}
              srcimg={"https://i.ibb.co/8bhXHfW/btcpany.png"}
            />
            <TargetsPortfolio
              name={"BTCaesy"}
              type={"Branding"}
              srcimg={
                "https://i.ibb.co/q0jsqYQ/btcasey.pnghttps://i.ibb.co/q0jsqYQ/btcasey.png"
              }
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"https://i.ibb.co/hW7mZzy/aether.png"}
            />
          </div>
        )}
        {social && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"Rocket City Bitcoin"}
              type={"Poster"}
              srcimg={"https://i.ibb.co/YBgY6Ws/rocket.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Booth"}
              srcimg={"https://i.ibb.co/VxVcHpp/dojo.png"}
            />
            <TargetsPortfolio
              name={"The Beff Initiative"}
              type={"Beff Initiative"}
              srcimg={"https://i.ibb.co/ynd9y61/beefinit.png"}
            />
            <TargetsPortfolio
              name={"Rocket City Bitcoin"}
              type={"Poster"}
              srcimg={"https://i.ibb.co/3pyynkS/rockc.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Merch"}
              srcimg={"https://i.ibb.co/GfZsX7Y/rond.png"}
            />
            <TargetsPortfolio
              name={"The Beef Initiative"}
              type={"Beef Initiative"}
              srcimg={"https://i.ibb.co/2jhRRjJ/tbeef.png"}
            />
            <TargetsPortfolio
              name={"Lightning Koffe"}
              type={"Label"}
              srcimg={"https://i.ibb.co/Z6yFn66/koffe.png"}
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/social/aether.png"}
            />
          </div>
        )}
        {motion && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Poster"}
              srcimg={"https://i.ibb.co/WFMY7HR/btcompany.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Video"}
              srcimg={"../../../public/portfolios/motion/dojo.png"}
            />
            <TargetsPortfolio
              name={"Mynode"}
              type={"Motion Graphic"}
              srcimg={"https://i.ibb.co/QpFqjtr/mynode.png"}
            />
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Pokemon Battle"}
              srcimg={"https://i.ibb.co/nMkw3D7/image.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Logo Animation"}
              srcimg={"../../../public/portfolios/motion/rond.png"}
            />
            <TargetsPortfolio
              name={"Mynode"}
              type={"Getting Started"}
              srcimg={"https://i.ibb.co/4VfBk39/mnode.png"}
            />
            <TargetsPortfolio
              name={"BTCasey"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/motion/koffe.png"}
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/motion/aether.png"}
            />
          </div>
        )}
        {d3 && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"SHAmory"}
              type={"3D design"}
              srcimg={"https://i.ibb.co/pxL31xV/sha.png"}
            />
            <TargetsPortfolio
              name={"Satoshi Skull"}
              type={"3D Design"}
              srcimg={"https://i.ibb.co/Fg14VtV/skull.png"}
            />
            <TargetsPortfolio
              name={"CyberHornet"}
              type={"3D Design"}
              srcimg={"https://i.ibb.co/022jqBX/hornet.png"}
            />
            <TargetsPortfolio
              name={"SHAmory"}
              type={"3D Design"}
              srcimg={"https://i.ibb.co/f9vnM6j/shad.png"}
            />

            <TargetsPortfolio
              name={"Satoshi Skull"}
              type={"3D Design"}
              srcimg={"https://i.ibb.co/sJz8z0f/triskul.png"}
            />

            <TargetsPortfolio
              name={"CyberHornet"}
              type={"3D Design"}
              srcimg={"https://i.ibb.co/hKNJWZH/dhornet.png"}
            />
            <TargetsPortfolio
              name={"BTCasey"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/3d/koffe.png"}
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/3d/aether.png"}
            />
          </div>
        )}
      </div>
    </div>
  );
};
