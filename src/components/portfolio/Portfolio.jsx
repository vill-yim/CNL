import React, { useEffect } from "react";
import { useState } from "react";
import { TargetsPortfolio } from "./TargetsPortfolio";
import { ModalView } from "../modal/ModalView";
import styles from "../../styles/portfolio/portfolio.module.css";
import { portfolioStore } from "../../utils/changePortfolio";
import { videoImg } from "../../utils/VideoImg";

//svg e imagenes 
import parkImg from "../../../public/portfolio/design/btcpark.svg"
import bkfday from "../../../public/portfolio/design/blackf.svg"
import espalda from "../../../public/portfolio/design/spalda.svg"
import digital from "../../../public/portfolio/design/hphour.svg"
import koffe from "../../../public/portfolio/design/lgkoffe.svg"
import rdojo from "../../../public/portfolio/design/RoninDojo.svg"
import tbc from "../../../public/portfolio/design/tbc.svg"
import Tennessee from "../../../public/portfolio/design/thebeef.svg"
import shamory from "../../../public/portfolio/design/shamory.svg"

export const Portfolio = () => {
  const { isImg, isVideo } = videoImg;
  const [seleccionado, setSeleccionado] = useState(0);
  const { videos, motion, design, d3, showPortfolio } = portfolioStore();

  useEffect(() => {
    showPortfolio("design");
  }, []);

  const handleClick = (i) => {
    setSeleccionado(i);
    const portfolio = ["design", "videos", "motion", "d3"];
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
            {["Design", "Videos", "Motion", "3D"].map((item, index) => (
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
              srcimg={parkImg}
            />
            <TargetsPortfolio
              name={"Black Friday"}
              srcimg={bkfday}
            />
            <TargetsPortfolio
              name={"Espalda Hig-res"}
              srcimg={espalda}
            />
            <TargetsPortfolio
              name={"Happy Hour Digital Flyer"}
              srcimg={digital}
            />
            <TargetsPortfolio
              name={"Lightning Koffe"}
              srcimg={koffe}
            />
            <TargetsPortfolio
              name={"Ronin Dojo"}
              srcimg={rdojo}
            />
            <TargetsPortfolio
              name={"TBC"}
              srcimg={tbc}
            />
            <TargetsPortfolio
              name={"Tennessee Beef Initiative"}
              srcimg={Tennessee}
            />
          </div>
        )}
        {videos && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"BEC - Financial Advice "}
              isVideo={"true"}
              video={"https://streamable.com/e/l79l20?"}
            />

            <TargetsPortfolio
              name={"FF - Gyms"}
              isVideo={"true"}
              video={"https://streamable.com/e/fgq1m0?"}
            />

            <TargetsPortfolio
              name={"Question N1"}
              isVideo={"true"}
              video={"https://streamable.com/e/jbb1fi?"}
            />

            <TargetsPortfolio
              name={"Ride Of Passage"}
              isVideo={"true"}
              video={
                "https://player.vimeo.com/video/1047759920?h=cab0c95f80&controls=1&title=0&byline=0&portrait=0&autopause=0&player_id=0&app_id=58479"
              }
            />

            <TargetsPortfolio
              name={"Seed Signer"}
              isVideo={"true"}
              video={"https://streamable.com/e/bcd6vq?"}
            />
            <TargetsPortfolio
              name={"VSL_Ambitious Labs"}
              isVideo={"true"}
              video={"https://streamable.com/e/k32y5k?"}
            />

            <TargetsPortfolio
              name={"Fred Thiel"}
              isVideo={"true"}
              video={"https://streamable.com/e/rgb1a5?"}
            />

            <TargetsPortfolio
              name={"Lan Carrol"}
              isVideo={"true"}
              video={
                "https://player.vimeo.com/video/1047764811?h=eb97b15791&autoplay=0&controls=1&title=0&byline=0&portrait=0&app_id=58479"
              }
            />
          </div>
        )}
        {motion && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"10101"}
              isVideo={"true"}
              video={"https://streamable.com/e/i8m8em?"}
            />
            <TargetsPortfolio
              name={"Bitcoin Keeper"}
              isVideo={true}
              video={"https://streamable.com/e/xjnkp3?"}
            />
            <TargetsPortfolio
              name={"Exchange"}
              isVideo={true}
              video={"https://streamable.com/e/5fr41i?"}
            />
            <TargetsPortfolio
              name={"Luxor Mining"}
              isVideo={true}
              video={"https://streamable.com/e/7n2rnh?"}
            />
               <TargetsPortfolio
              name={"Mynode Marketplace"}
              isVideo={true}
              video={"https://streamable.com/e/40d76f?"}
            />
            <TargetsPortfolio
              name={"Ordis Respector"}
              isVideo={true}
              video={"https://streamable.com/e/bc1g53?"}
            />
         
            <TargetsPortfolio
              name={"Pokemon"}
              isVideo={true}
              video={"https://streamable.com/e/c2rn4l?"}
            />
            <TargetsPortfolio
              name={"The BTC Amazon Gift"}
              isVideo={true}
              video={"https://streamable.com/e/cfdwgf?"}
            />
          </div>
        )}
        {d3 && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"Bitcoin Skull"}
              type={"3D Design"}
              srcimg={"https://i.ibb.co/Fg14VtV/skull.png"}
            />
            <TargetsPortfolio
              name={"Bubbles Target"}
              isVideo={true}
              video={"https://streamable.com/e/1sf8j3?"}
            />
            
            <TargetsPortfolio
              name={"CyberHornet"}
              type={"3D Design"}
              srcimg={"https://i.ibb.co/hKNJWZH/dhornet.png"}
            />
            <TargetsPortfolio
              name={"Fold Preview"}
              isVideo={true}
              video={"https://streamable.com/e/9l3722?"}
            />
            <TargetsPortfolio
              name={"Model One"}
              isVideo={true}
              video={"https://streamable.com/e/24gayr?"}
            />

            <TargetsPortfolio
              name={"Model Two"}
              isVideo={true}
              video={"https://streamable.com/e/b2sq2n?"}
            />

            <TargetsPortfolio
              name={"Mynode Model Two"}
              isVideo={true}
              video={"https://streamable.com/e/4u1lar?"}
            />
            <TargetsPortfolio
              name={"PDU Music Version"}
              isVideo={true}
              video={"https://streamable.com/e/knixsl?"}
            />
            <TargetsPortfolio 
            name={"SHAmory"}
            srcimg={shamory}
            />
          </div>
        )}
      </div>
    </div>
  );
};
