import React, { useState } from "react";
import { Line } from "rc-progress";
import { Waypoint } from "react-waypoint";
import VisibilitySensor from "react-visibility-sensor";
import { useEffect } from "react";

function StarProgress({ targetHeight, percent: _percent }) {
  // console.log("hhh", targetHeight);

  const [percent, setPercent] = useState(0);

  // const [viewPortEntered, setViewPortEntered] = useState(false);

  // const onVWEnter = () => {
  //   setViewPortEntered(true);
  // };

  useEffect(() => {
    const ProgressStar = () => {
      if (window.pageYOffset > targetHeight) {
        setPercent(_percent);
      }
    };

    window.addEventListener("scroll", ProgressStar);

    return () => window.removeEventListener("scroll", ProgressStar);
  }, [targetHeight]);

  return (
    // <ul className="rating-list">
    //   <li className="rating-details">
    //     <span className="number-rating">5</span>
    //     <div className="progress-item">
    //       <div className="donat-bg" data-percent="60%">
    //         <div className="custom-donat"></div>
    //       </div>
    //     </div>
    //     <span className="percent"></span>
    //   </li>
    //   <li className="rating-details">
    //     <span className="number-rating">4</span>
    //     <div className="progress-item">
    //       <div className="donat-bg" data-percent="20%">
    //         <div className="custom-donat"></div>
    //       </div>
    //     </div>
    //     <span className="percent"></span>
    //   </li>
    //   <li className="rating-details">
    //     <span className="number-rating">3</span>
    //     <div className="progress-item">
    //       <div className="donat-bg" data-percent="10%">
    //         <div className="custom-donat"></div>
    //       </div>
    //     </div>
    //     <span className="percent"></span>
    //   </li>
    //   <li className="rating-details">
    //     <span className="number-rating">2</span>
    //     <div className="progress-item">
    //       <div className="donat-bg" data-percent="7%">
    //         <div className="custom-donat"></div>
    //       </div>
    //     </div>
    //     <span className="percent"></span>
    //   </li>
    //   <li className="rating-details">
    //     <span className="number-rating last">1</span>
    //     <div className="progress-item">
    //       <div className="donat-bg" data-percent="3%">
    //         <div className="custom-donat"></div>
    //       </div>
    //     </div>
    //     <span className="percent"></span>
    //   </li>
    // </ul>
    <div>
      <Line
        className="star-progress"
        percent={percent}
        strokeWidth={4}
        strokeColor="#D3D3D3"
      />
    </div>
  );
}

export default StarProgress;
