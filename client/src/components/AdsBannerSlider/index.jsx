import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className=''>
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className='smlBtn'
      >
        <SwiperSlide>
          <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1743406115_HPMC-1.jpg?im=Resize=(768,448)' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1743405765_HPMC---GM--1-.jpg?im=Resize=(768,448)' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1743960989_HPMC-2.jpg?im=Resize=(768,448)' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1743961099_HPMC-4.jpg?im=Resize=(768,448)' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1743961026_HPMC-3.jpg?im=Resize=(768,448)' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1743960941_HPMC-1.jpg?im=Resize=(768,448)' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1743529180_stock_up.jpg?im=Resize=(768,448)' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://www.jiomart.com/images/cms/aw_rbslider/slides/1743460871_HPMC_11.03.25_V004.2.jpg?im=Resize=(768,448)"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
