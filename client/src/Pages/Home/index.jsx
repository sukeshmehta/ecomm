import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import BlogItem from "../../components/BlogItem";
import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />

      <section className="container py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%] ">
            <HomeSliderV2 />
          </div>
          {/* bannerBoxV2 side banner  */}
          <div className="part2 w-[30%] flex items-center justify-between flex-col">
            <BannerBoxV2
              info="left"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              }
            />
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
            />
          </div>
        </div>
      </section>
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="letfSec">
              <h2 className="text-[25px] font-[500]">Popular Products</h2>
              <p className="text-[15px] font-[300]">
                Do not miss the current offers until the end of the March.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fasion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Sports" />
                <Tab label="Mobiles" />
                <Tab label="Stationery" />
                <Tab label="Kids" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-2 p-4 border-2 border-[gray] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[40px] " />
              <span className="text-[20px] font-[600] uppercase ">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500] ">
                Free Delivery Now On Your First Order
              </p>
            </div>
            <p className="font-bold font-w-[30px]">-Only &#8377; 200</p>
          </div>

          <AdsBannerSliderV2 items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[500]">Latest Products</h2>
          <ProductsSlider items={5} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[500]">Featured Products</h2>
          <ProductsSlider items={5} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pt-0 pb-8 bg-white blogSection">
        <div className="container">
          <h2 className="text-[25px] font-[500] mb-4">from the blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
