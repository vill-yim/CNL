import React from "react";
import { RenderAboutus } from "./RenderAboutus";
import { BtnSections } from "../../buttons/BtnSections";
import styles from "../../../styles/home/about.module.css";

export const Aboutus = () => {
  return (
    <div className={styles["content-about"]}>
      <div className={styles["title-about"]}>
        <h3>CHALLENGES BITCOIN COMPANIES FACE</h3>
      </div>

      <div className={styles["renders-abouts"]}>
        <RenderAboutus
          clase="img-about1"
          title={"Explaining Bitcoin to Agencies Who Don’t “Get It”"}
          text={
            "Bitcoin companies often find themselves stuck in a cycle of constant revisions because agencies lack the expertise to get things right the first time. This back-and-forth process wastes valuable time, delaying campaigns and missing critical, time-sensitive opportunities. Without a deep understanding of Bitcoin’s technical nuances and cultural context, these agencies fail to deliver on tight deadlines, leaving businesses frustrated and unable to maintain momentum in an industry that demands speed and precision."
          }
        />
        <RenderAboutus
          clase="img-about2"
          title={"Inauthentic Messaging That Misses the Mark"}
          text={
            "Generic or corporate-style campaigns fail to resonate with Bitcoin's community, which values authenticity, decentralization, and financial sovereignty. Agencies without a deep understanding of Bitcoin often create inauthentic messaging that alienates the target audience, resulting in lost trust and engagement."
          }
        />
        <RenderAboutus
          clase="img-about3"
          title={
            "Endless Revisions and Slow Execution in a Fast-Moving Industry"
          }
          text={
            "Many marketing agencies lack the technical and cultural understanding of Bitcoin. This forces companies to spend countless hours explaining blockchain mechanics, Lightning Network integration, or the ethos of decentralization. Instead of hitting the ground running, these agencies waste time on endless onboarding sessions, delaying progress and adding to the company’s workload."
          }
        />
      </div>

      <div className={styles["btn-sec"]}>
        <BtnSections />
      </div>
    </div>
  );
};
