import React from "react";

import "../BannerBoxV2/style.css";
import { Link } from "react-router-dom";
const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
      <img
        src={props.image}
        alt=""
        className="w-full transition-all duration-150 group-hover:scale-105"
      />
      <div
        className={`info absolute p-5 top-0 ${
          props.info === "left" ? "left-0" : "right-0"
        } w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-5 ${
          props.info === "left" ? "" : "pl-16"
        }`}
      >
        <h2 className="text-[18px] font-[600] flex items-center justify-center">
          Samsung Gear VR Camera
        </h2>
        <span className="text-[25px] text-primary w-full ">₹ 1999</span>
        <Link to="/" className="link">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default BannerBoxV2;
