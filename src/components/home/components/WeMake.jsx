import React from "react";
import { TargetWeMake } from "./TargetWemake";
import { BtnSections } from "../../buttons/BtnSections";
import styles from "../../../styles/home/wemake.module.css";

export const WeMake = () => {
  return (
    <div className={styles["section-wemake"]}>
      <div className={styles["title-wemake"]}>
        <h4>WHAT MAKE US DIFFERENT</h4>
      </div>

      <div className={styles["contents-wemakes"]}>
        <TargetWeMake
          number={"01"}
          title={"Deep Bitcoin Expertise"}
          text={
            "We understand Bitcoin’s technology, culture, and ethos inside and out. This means no more wasting time explaining basic concepts or revising campaigns that miss the mark. Our expertise ensures your marketing is accurate, insightful, and tailored to resonate with the Bitcoin community from the start."
          }
        />

        <TargetWeMake
          number={"02"}
          title={"Authentic Messaging That Resonates"}
          text={
            "Our work reflects Bitcoin’s principles of decentralization, financial sovereignty, and trustlessness. Every campaign we create connects deeply with your audience, building trust and setting your brand apart as a true leader in the Bitcoin space."
          }
        />

        <TargetWeMake
          number={"03"}
          title={"Results-Driven Execution"}
          text={
            "We don’t just create pretty visuals—we deliver measurable outcomes like increased user acquisition, stronger community engagement, and enhanced brand credibility. Every deliverable is designed to drive real growth."
          }
        />

        <TargetWeMake
          number={"04"}
          title={"Fast and Frustration-Free Delivery"}
          text={
            "Our streamlined process ensures high-quality marketing, delivered on time and without endless revisions. We know the Bitcoin industry moves fast, and we’re here to help you stay ahead of the curve."
          }
        />

        <TargetWeMake
          number={"05"}
          title={"End-to-End Creative Solutions"}
          text={
            "From strategy to execution, we handle everything—branding, campaigns, content, and community engagement—so you can focus on scaling your business while we handle the heavy lifting."
          }
        />

        <TargetWeMake
          number={"06"}
          title={"A Partner Who “Gets It”"}
          text={
            "We’re not just another agency. We’re your partner in growth, with a proven track record of helping Bitcoin companies thrive. Our expertise, authenticity, and efficiency make us the go-to choice for businesses that demand more."
          }
        />
      </div>

      <div className={styles["btn-sec"]}>
        <BtnSections />
      </div>
    </div>
  );
};
