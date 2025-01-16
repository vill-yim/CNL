import Modal from "react-modal";
import styles from "../../styles/modalView/modalView.module.css";
import { ReactSVG } from "react-svg";
import React from "react";
import { useStoreView } from "../../utils/useStoreView";

export const ModalView = ({ children, src }) => {
  const { view, setView } = useStoreView();
  return (
    <Modal
    isOpen={view} 
    onRequestClose={()=>setView(false)}
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
        position:'fixed',
        display:"flex",
        flexDirection:"column",
        zIndex:'1000000',
        bottom: "auto",
        marginRight: "-50%",
        background: "rgba(27, 27, 27, 0.85)",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
      },
    }}
  >
    <button className={styles['btn']} onClick={() => setTimeout(() => setView(false), 100)} 
    > X </button>
    <ReactSVG  className={styles['img']} src={src}/>
  </Modal>
  )  
};
