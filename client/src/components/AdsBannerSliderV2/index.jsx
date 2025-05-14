import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../BannerBoxV2";

const AdsBannerSlider = (props) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
