import Slider from "react-slick";
import { BtnTestimonials } from "../../buttons/BtnTestimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/home/testimonials.module.css";

const enderTarget = ({ testimonial, name, description }) => {
  return (
    <div className={styles["target-testimonial"]}>
      <div className={styles["content-target"]}>
        <div className={styles["testimonial"]}>
          <p>{testimonial}</p>
        </div>

        <div className={styles["name-testimoni"]}>
          <div className={styles["name-descript"]}>
            <div className={styles["img"]}>
              <img src={src} alt="" />
            </div>
            <div className={styles["name"]}>
              <h5>{name}</h5>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles["extra"]}></div>
        </div>
      </div>
    </div>
  );
};

const RenderTarget = ({
  testimonial,
  testimonial2,
  testimonial3,
  testimonial4,
  src,
  name,
  description,
}) => {
  return (
    <div className={styles["target-testimonial"]}>
      <div className={styles["content-target"]}>
        <div className={styles["testimonial"]}>
          <p>
            {testimonial}
            <br />
            <br />
            {testimonial2}
            <br />
            <br />
            {testimonial3}
            <br />
            <br />
            {testimonial4}
          </p>
        </div>

        <div className={styles["name-testimoni"]}>
          <div className={styles["name-descript"]}>
            <div className={styles["img"]}>
              <img src={src} alt="" />
            </div>
            <div className={styles["name"]}>
              <h5>{name}</h5>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles["extra"]}></div>
        </div>
      </div>
    </div>
  );
};
const Responsive = () => {
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
    <div className="slider-container">
      <Slider {...settings}>
        <RenderTarget
          name={"RoninDojo"}
          src={"https://i.ibb.co/dg23Fys/Ronin-Dojo-Color-B.png"}
          testimonial={
            "The RoninDojo team has loved working with Creative Network for many things such as our website, branding, tradeshow booth vinyl backgrounds in Miami and Prague, and more. "
          }
          testimonial2={
            "They are quick to get the things designed, easy to work with, and very responsive if changes are needed."
          }
          testimonial3={
            "We love how they will deliver quickly and for the right price!"
          }
        />
        <RenderTarget
          name={"MYNODE"}
          src={"https://i.ibb.co/K6mwSmh/mynode.png"}
          testimonial={
            "Working with Creative Network Live has been a great experience. "
          }
          testimonial2={
            "They always deliver outstanding designs that captures what we are looking for. "
          }
          testimonial3={
            "Their creativity and understanding of Bitcoin made all the difference. Highly recommend!"
          }
        />

<RenderTarget
          name={"Studio BTC"}
          src={"https://i.ibb.co/RSFY96b/Studio-BTC.png"}
          testimonial={
            "Studio BTC has worked with Creative Network Live on multiple projects."
          }
          testimonial2={
            "They've been instrumental in creating quality shorts for our clients, with excellent communication and a keenness for new challenges. "
          }
          testimonial3={
            "Their professionalism is top-notch; we're eager for more collaborations."
          }
        />


        <RenderTarget
          name={"Bitcoin Park"}
          src={"https://i.ibb.co/dJq3Q0n/Bitcoin-Park-Color-B.png"}
          testimonial={
            "Finding the right partners is crucial, especially for early-stage companies and projects, and Creative Network has been an invaluable resource for Bitcoin Park. "
          }
          testimonial2={
            "They've consistently stepped in and delivered exceptional results on a variety of ad hoc projects—on time and within budget. "
          }
          testimonial3={
            "Their work, reliability, and alignment with the values of the Bitcoin community make them stand out."
          }
        />

        <RenderTarget
          name={"MassAdoption"}
          src={"https://i.ibb.co/dWNgN6h/Mass-Adoption-Logo-Color.png"}
          testimonial={
            "We At MassAdoption have been growing quickly and urgently needed marketing design help/advice/guidance. Luckily, we were referred to Creative Network through one of our other bitcoin partners who had been using them for a while."
          }
          testimonial2={
            "We received top-notch assistance in logo and other design projects in extremely fast and effective fashion."
          }
          testimonial3={"Partnering with Creative Network has allowed us to continue our rapid growth and we deeply appreciate their creativity and streamline procedures to accomplish our goals."}
         testimonial4={"Highly recommend them for design/logo projects."}
        />

        <RenderTarget
          name={"The Bitcoin Backup"}
          src={"https://i.ibb.co/ZTSKLQY/The-Bitcoin-Backup.png"}
          testimonial={
            "I had a great experience working with CNL."
          }
          testimonial2={
            "They implemented as many revisions as I needed and delivered on time."
          }
        />

      
      </Slider>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className={styles["testimonials-section"]}>
      <div className={styles["testimonials-title"]}>
        <h4>TESTIMONIALS</h4>
      </div>

      <div className={styles["carousel-testimonials"]}>
        <Responsive />
      </div>

      <div className={styles["btn-call-cover"]}>
      <BtnTestimonials txt={"Book a call"} />
      </div>
    </div>
  );
};
