import React from "react";
import styles from "../../styles/services/services.module.css";
export const RenderService = ({
  title_service,
  text_service,
  btnacction,
  image_service,
  sliders,
  title_slider,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles["cover-services"]}>
        <input required style={{display:"none"}}/>
        <div className={styles["descript-cover"]}>
          <div className={styles["title-cover"]}>
            <h2>{title_service}</h2>
          </div>
          <div className={styles["text-cover"]}>
            <p>{text_service} </p>
          </div>
          <div className={styles["btn-cover"]}> {btnacction} </div>
        </div>

        <div className={styles["img-cover"]}>
          <div
            className={styles["img"]}
            style={{ backgroundImage: `url(${image_service})` }}
          ></div>
        </div>
      </div>
      <div className={styles["slider-services"]}>
        <div className={styles["title-slider"]}>
          <h2>{title_slider}</h2>
        </div>
        <div className={styles["slider-wrapper"]}>
 {sliders}
    </div>
      </div>
    </>
  );
};
