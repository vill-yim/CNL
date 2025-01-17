import Modal from "react-modal";
import styles from "../../styles/modalView/modalView.module.css";
import { ReactSVG } from "react-svg";
import React from "react";

export const ModalView = ({ src, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          right: "auto",
          border: "none",
          position: 'fixed',
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-around",
          zIndex: '1000000',
          bottom: "auto",
          margin: "0 auto",
          paddingTop:"90px",
          paddingBottom:"90px",
          background: "rgba(27, 27, 27, 0.85)",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
        },
      }}
    >


      <div className={styles["btn"]}><button
        onClick={() => setTimeout(() => onClose(), 100)}
      >X
      </button></div>

      <div className={styles["content-svg"]}>

      <ReactSVG  className={styles['img']} src={src} />
      </div>
      
    </Modal>
  );
};
