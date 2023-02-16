import React from "react";
// import home from "./Images/HomePageMiddileSportsOnlineLogo.svg";
import classes from "./app.module.css";
import RCarousel from "./components/RCarousel";

function App() {
  return (
    <div className={classes.app}>
      <nav>
        <ul>
          <li>
            {/* <a href="http://Wa.me/+918005535213">Cricket</a> */}
            <a href="http://Wa.me/+916367837699">Cricket</a>
          </li>
          <li>
            {/* <a href="http://Wa.me/+918005535213">Soccer</a> */}
            <a href="http://Wa.me/+916367837699">Soccer</a>
          </li>
          <li>
            {/* <a href="http://Wa.me/+918005535213">Tennis</a> */}
            <a href="http://Wa.me/+916367837699">Tennis</a>
          </li>
          <li>
            {/* <a href="http://Wa.me/+918005535213">Many More</a> */}
            <a href="http://Wa.me/+916367837699">Many More</a>
          </li>
        </ul>
      </nav>
      <div className={classes.head}>
        <div className={classes.left_head}>
          <h1 className={classes.heading}>Lucky</h1>
          <h5 className={classes.sp}>online</h5>
          <a
            // href="http://Wa.me/+918005535213"
            href="http://Wa.me/+916367837699"
            className={classes.animatedButton}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Click Here To Get ID
          </a>
        </div>
        {/* <div className={classes.right_head}>
          <a href="http://Wa.me/+916375992615">
            <img className={classes.img} src={home} alt="" />
          </a>
        </div> */}
      </div>
      <div className={classes.RCarouselContainer}>
        <RCarousel />
      </div>
    </div>
  );
}

export default App;
