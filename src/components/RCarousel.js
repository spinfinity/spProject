import React from "react";
import classes from "./RCarousel.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cas from "../Images/Carousel/Cas.png";
import Cric from "../Images/Carousel/Cric.png";
import Bas from "../Images/Carousel/Bas.png";
import Soc from "../Images/Carousel/Soc.png";
import Ready from "../Images/Carousel/Ready.png";

const RCarousel = () => {
  return (
    <section>
      <Carousel
        centerMode={true}
        centerSlidePercentage={30}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        autoPlay={true}
      >
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Bas} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Cric} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Cas} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Soc} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Ready} alt="" className={classes.crousa} />
        </div><div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Bas} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Cric} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Cas} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Soc} alt="" className={classes.crousa} />
        </div>
        <div onClick={() => window.open("http://Wa.me/+916375992615")}>
          <img src={Ready} alt="" className={classes.crousa} />
        </div>
      </Carousel>
    </section>
  );
};

export default RCarousel;
