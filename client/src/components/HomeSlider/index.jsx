import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider overflow-hidden relative py-4">
      <div className="containe ">
        <Swiper
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img25/Sports/Feb/GW/Hero/5298-Sports---Fitness-accessories-hero-Pc_2_1._CB550210129_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jupiter/KSD/PEA/Updated/Phase3/Phase3b/929712._CB542298789_.png"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_1x_1._CB582889946_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-1x._CB547414496_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_1500X600_Unrec._CB593464763_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/aprilGW/2x._CB547209600_.jpg"
                alt="Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
