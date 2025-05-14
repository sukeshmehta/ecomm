import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductsItem from "../ProductsItem";

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider overflow-hidden py-5">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
