import React from "react";

const BannerBox = (props) => {
  return (
    <div className='box bannerBox overflow-hidden rounded-lg group'>
      <img
        src={props.img}
        alt='banner'
        className='w-full transition-all group-hover:scale-110 group-hover:rotate-2 '
      />
    </div>
  );
};

export default BannerBox;
