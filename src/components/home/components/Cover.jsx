import { Clients } from "./Clients";
import styles from "../../../styles/home/cover.module.css";
import { BtnCover } from "../../buttons/btnCover";

export const Cover = () => {
  return (
    <div className={styles["content-cover"]}>
      <div className={styles["content-titles"]}>
        <h1 className={styles["header-title"]}>
          STOP TEACHING MARKETING <br />  AGENCIES
          ABOUT BITCOIN BASICS
        </h1>
        <h2>
          Partner with Expert Bitcoin Creatives Who HODL the Knowledge to 
          Deliver Marketing That Works
        </h2>
      </div>

      <div className={styles["content-video"]}>
    
<iframe width="100%" style={{borderRadius:"40px"}} height="100%"     src="https://www.dailymotion.com/embed/video/k2HKRpZb2lzDVcCf8mA?queue-enable=false&sharing-enable=false&end-screen-enable=false" 
 frameborder="0" allowfullscreen></iframe>

      </div>

      <div className={styles["btn-cover"]}>
        <BtnCover text={'Book a call'}/>
      </div>

      <div className={styles["sponsors"]}>
        <Clients />
      </div>
    </div>
  );
};

