import Slider from "react-slick";
import React, { useEffect } from "react";
import { BtnHeader } from "../buttons/BtnHeader";
import { RenderService } from "./RenderService";
import styles from "../../styles/services/services.module.css";
import { TargetService } from "./TargetService";
import { allServiceStore } from "../../utils/serviceStore";




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

const RenderServiceYoutubeTargets = () => {

  return (
    <Slider {...settings}>
    <TargetService name_slider={"Visibility"} image_slider={"https://img.icons8.com/forma-light/24/FFFFFF/visible.png"}/>
    <TargetService name_slider={"Retention"} image_slider={"https://i.ibb.co/5hm451p/group.png"}/>
    <TargetService name_slider={"Growth"} image_slider={"https://i.ibb.co/NsyWzyj/data.png"}/>
  </Slider>
  );
};

const RenderServiceCreativeTargets = () => {

  return (
    <Slider {...settings}>
    <TargetService name_slider={"UGCs"} image_slider={"https://i.ibb.co/z8YtsPP/ugcs.png"}/>
    <TargetService name_slider={"Motion"}image_slider={"https://i.ibb.co/5RG19C7/motion.png"}/>
    <TargetService name_slider={"Graphics"} image_slider={"https://i.ibb.co/XkKWCZK/graphs.png"}/>
    <TargetService image_slider={"https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-virtual-reality-metaverse-tanah-basah-basic-outline-tanah-basah.png"} name_slider={"AR/VR"}/>
  </Slider>
  );
};


const RenderServiceOrganicTargets = () => {

  return (
    <Slider {...settings}>
    <TargetService name_slider={"SEO"} image_slider={"https://i.ibb.co/xznYp5N/seo.png"}/>
    <TargetService name_slider={"Marketing"} image_slider={"https://i.ibb.co/RgzZccn/mark.png"}/>
    <TargetService  name_slider={"Media"} image_slider={"https://i.ibb.co/c6qK9hT/media.png"}/>
    <TargetService  name_slider={"Email"} image_slider={"https://i.ibb.co/DLwm6DN/email.png"}/>
  </Slider>
  );
};

const RenderServiceUxuiTargets = () => {

  return (
    <Slider {...settings}>
    <TargetService name_slider={"Research"} image_slider={"https://i.ibb.co/2yn0fFY/search.png"}/>
    <TargetService name_slider={"Design"} image_slider={"https://i.ibb.co/bswnJCq/design.png"}/>
    <TargetService  name_slider={"Optimization"} image_slider={"https://i.ibb.co/K5qt1Lk/optimi.png"}/>
    <TargetService  name_slider={"Strategy"} image_slider={"https://i.ibb.co/3MfYQw2/strate.png"}/>
  </Slider>
  );
};

export const Services = () => {
const {youtube,studio,web,uxui,organic,allServices}= allServiceStore()




  return (
    <div className={styles["content-services"]}>
     {youtube  && <RenderService
        title_service={"YOUTUBE"}
        btnacction={<BtnHeader text={"Book a call"} />}
        text_service={"Professional video editing for every content type"}
        image_service={"https://i.ibb.co/3m9DmJ5/youtube.png"}
        title_slider={"METRICS WE OPTIMIZE"}
        sliders={ <RenderServiceYoutubeTargets /> }
      />}
{studio &&
<RenderService
        title_service={"CREATIVE STUDIO"}
        btnacction={<BtnHeader text={"Book a call"} />}
        text_service={"Comprehensive design solutions to boost your visual identity"}
        image_service={"https://i.ibb.co/VBc0Dk6/cstudio.png"}
        title_slider={"METRICS WE OPTIMIZE"}
        sliders={ <RenderServiceCreativeTargets /> }
      />}

{ organic && <RenderService
        title_service={"ORGANIC GROWTH"}
        text_service={"Effective marketing strategies for sustainable growth"}
        btnacction={<BtnHeader text={"Book a call"} />}
        image_service={"https://i.ibb.co/HtySYyt/organic.png"}
        title_slider={"SERVICES WE OFFER"}
        sliders={ <RenderServiceOrganicTargets /> }
      />}
{ uxui && <RenderService
        title_service={"UX/UI"}
        text_service={"Seamless UX/UI designs for web and mobile apps"}
        btnacction={<BtnHeader text={"Book a call"} />}
        image_service={"https://i.ibb.co/fkDLYwc/uxui.png"}
        title_slider={"OUR WORKFLOW"}
        sliders={ <RenderServiceUxuiTargets /> }
      />}

{web && <RenderService
        title_service={"WEB DESIGN"}
        text_service={"Lorem impsu dolorem rem, asomary amaleta eslomota aramasta"}
        btnacction={<BtnHeader text={"Book a call"} />}
        image_service={"https://i.ibb.co/8YxvZ7m/webdev.png"}
        title_slider={"OUR WORKFLOW"}
        sliders={ <RenderServiceYoutubeTargets /> }
      />}
    </div>
  );
};
