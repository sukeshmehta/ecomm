import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      {/* sidebar product image for know more about the products throw image */}
      {/* and also zoom images */}

      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden "
          >
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(0)}
              >
                <img
                  src="https://m.media-amazon.com/images/I/51KX+RYh67L._SY741_.jpg"
                  className="w-full transition-all group-hover:scale-105 "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(1)}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61M5vQUR0EL._SY550_.jpg"
                  className="w-full transition-all group-hover:scale-105 "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(2)}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61hE7eijhaL._SY550_.jpg"
                  className="w-full transition-all group-hover:scale-105 "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(3)}
              >
                <img
                  src="https://m.media-amazon.com/images/I/51KX+RYh67L._SY550_.jpg"
                  className="w-full transition-all group-hover:scale-105 "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(4)}
              >
                <img
                  src="https://m.media-amazon.com/images/I/81ixO+qhsVL._SY550_.jpg"
                  className="w-full transition-all group-hover:scale-105 "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md ">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/61NShCPWdnL._SY741_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/61M5vQUR0EL._SY550_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/61hE7eijhaL._SY550_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/51KX+RYh67L._SY550_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/81ixO+qhsVL._SY550_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
