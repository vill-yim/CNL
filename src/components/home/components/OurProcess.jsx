import styles from "../../../styles/home/ourprocess.module.css";
import {BtnSections} from '../../buttons/BtnSections'

export const OurProcess = () => {
  return (
    <div className={styles["ourprocess-section"]}>
      <div className={styles["ourprocess-title"]}>
        <h4>Our Process</h4>
      </div>

      <div className={styles["ourprocess-steps"]}>


        <div className={styles["steps"]}>
          <div className={styles["step-1"]}>
            <div className={styles["n1-process"]}></div>
            <div className={`${styles["circle-process"]} ${styles["pop1"]}`}>
              <div className={styles["content-bg-process-lupa"]}>
                <div className={styles["bg-process-lupa"]}>
                  <div className={styles["bg-process"]}>
                    <div className={styles["process-lupa"]}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["text-process"]}>
              <p>We dive deep into your brand, goals, and audience to understand your unique needs and challenges.</p>
            </div>
            
          </div>
          <div className={styles["step-2"]}>
            <div className={styles["n2-process"]}></div>
            <div className={`${styles["circle-processb"]} ${styles["pop2"]}`}>
              <div className={styles["content-bg-process-lupa"]}>
                <div className={styles["bg-process-lupa"]}>
                  <div className={styles["bg-process"]}>
                    <div className={styles["process-flecha"]}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["text-process"]}>
              <p>We craft a custom marketing plan tailored to align with Bitcoin’s ethos and drive measurable results.</p>
            </div>
          </div>
          <div className={styles["step-3"]}>
            <div className={styles["n3-process"]}></div>
            <div className={`${styles["circle-process"]} ${styles["pop3"]}`}>
              <div className={styles["content-bg-process-bombillo"]}>
                <div className={styles["bg-process-lupa"]}>
                  <div className={styles["bg-process"]}>
                    <div className={styles["process-bombillo"]}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["text-process"]}>
              <p>Our team develops authentic, high-impact campaigns, visuals, and messaging that resonate with your audience.</p>
            </div>
          </div>
          <div className={styles["step-4"]}>
            <div className={styles["n4-process"]}></div>
            <div className={`${styles["circle-processb"]} ${styles["pop4"]}`}>
              <div className={styles["content-bg-process-media"]}>
                <div className={styles["bg-process-lupa"]}>
                  <div className={styles["bg-process"]}>
                    <div className={styles["process-media"]}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["text-process"]}>
              <p>We execute efficiently, ensuring every deliverable is polished, on-brand, and delivered on time.</p>
            </div>
          </div>
          <div className={styles["step-5"]}>
            <div className={styles["n5-process"]}></div>
            <div className={`${styles["circle-process"]} ${styles["pop5"]}`}>
              <div className={styles["content-bg-process-datos"]}>
                <div className={styles["bg-process-lupa"]}>
                  <div className={styles["bg-process"]}>
                    <div className={styles["process-datos"]}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["text-process"]}>
              <p>We analyze performance and refine strategies to continually enhance your marketing impact.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["btn-sec"]}>
      <BtnSections />
      </div>
    </div>
  );
};
