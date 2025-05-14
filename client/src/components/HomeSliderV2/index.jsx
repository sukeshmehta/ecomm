import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeSliderV2 = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        desableOnInteraction: false,
      }}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item rounded-md w-full overflow-hidden relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
          <div className="info absolute top-0 -right-[100%] opacity-0  w-[50%] h-[100%] p-8 z-50 flex items-center  flex-col justify-center transition-all duration-700">
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
              Big sale of the day
            </h4>
            <h2 className="text-[30px] font-[600] w-full relative -right-[100%] opacity-0 ">
              Women solid rounded <br /> green T-Shirt
            </h2>
            <h3 className="flex items-center gap-3 text-[18px] font-[300] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0 ">
              Started at Only{" "}
              <span className="text-[30px] font-[700] text-primary ">
                &#8377; 149
              </span>
            </h3>
            <div className="w-full relative -right-[100%] opacity-0 btn_">
              <Button className="btn-org relative -right-[100%] opacity-0 btn_">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item rounded-[20px] w-full overflow-hidden">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
          <div className="info absolute top-0 -right-[100%] opacity-0  w-[50%] h-[100%] p-8 z-50 flex items-center  flex-col justify-center transition-all duration-700">
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
              Big sale of the day
            </h4>
            <h2 className="text-[30px] font-[600] w-full relative -right-[100%] opacity-0 ">
              Women solid rounded <br /> green T-Shirt
            </h2>
            <h3 className="flex items-center gap-3 text-[18px] font-[300] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0 ">
              Started at Only{" "}
              <span className="text-[30px] font-[700] text-primary ">
                &#8377; 149
              </span>
            </h3>
            <div className="w-full relative -right-[100%] opacity-0 btn_">
              <Button className="btn-org relative -right-[100%] opacity-0 btn_">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSliderV2;
