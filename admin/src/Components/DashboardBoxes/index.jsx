import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HiMiniGiftTop } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";
import { RiBankLine } from "react-icons/ri";
import { RiProductHuntLine } from "react-icons/ri";
import { HiOutlineCollection } from "react-icons/hi";

const DashboardBoxes = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box bg-pink-400 p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border[rgba(0,0,0,0.1)] flex items-center gap-4">
            <HiMiniGiftTop className="text-[40px] text-cyan-600" />
            <div className="info w-[70%]">
              <h3>New Orders</h3>
              <b>12,232</b>
            </div>
            <IoStatsChart className="text-[50px] text-cyan-500 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box bg-cyan-400 p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border[rgba(0,0,0,0.1)] flex items-center gap-4">
            <IoPieChartSharp className="text-[40px] text-[#e728ee]" />
            <div className="info w-[70%]">
              <h3>Sales Product</h3>
              <b>$412,232</b>
            </div>
            <IoStatsChart className="text-[50px] text-[#e728ee] " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box bg-violet-400 p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border[rgba(0,0,0,0.1)] flex items-center gap-4">
            <RiBankLine className="text-[40px] text-[#7928ca]" />
            <div className="info w-[70%]">
              <h3>Product Revenue</h3>
              <b>12,232</b>
            </div>
            <IoStatsChart className="text-[50px] text-[#7928ca] " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box bg-blue-800 p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border[rgba(0,0,0,0.1)] flex items-center gap-4">
            <HiOutlineCollection className="text-[40px] text-[#91ca28] " />
            <div className="info w-[70%]">
              <h3>Product Types</h3>
              <b>12,232</b>
            </div>
            <IoStatsChart className="text-[50px] text-[#91ca28] " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] bg-green-400 rounded-md border border[rgba(0,0,0,0.1)] flex items-center gap-4">
            <RiProductHuntLine className="text-[40px] text-[#1410e0]" />
            <div className="info w-[70%] ">
              <h3>Total Products</h3>
              <b>12,232</b>
            </div>
            <IoStatsChart className="text-[50px] text-[#1410e0] " />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBoxes;
