import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom"


const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider py-8 pt-4'>
        <div className='container'>
            <Swiper
            slidesPerView={5}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/BAURevamp25/v2/Mamaearth-8._SY530_QL85_FMpng_.png" className='w-[100px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Blue Haven</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/unrec/Makeup_brushes._SX564_QL85_FMpng_.png" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Makeup Brushes</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/unrec/Lip_sticks._SX564_QL85_FMpng_.png" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Lipstic</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-8 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/I/41dsiHOa+yL._AC_UL320_.jpg" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Brushes set</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/I/619BEVDiBZL._AC_UL320_.jpg" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Makeup Brushes set</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/unrec/Nails_paints._SX564_QL85_FMpng_.png" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Nail Paint</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/unrec/Concealers._SX564_QL85_FMpng_.png" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Concealers</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/unrec/Deos._SY530_QL85_FMpng_.png" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Deos</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/unrec/sunscreens._SY530_QL85_FMpng_.png" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Sunscreens</h3>
                    </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link>
                    <div className='item py-6 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Beauty/Jupiter/unrec/Body_Lotions._SY530_QL85_FMpng_.png" alt="mobile image" className='w-[60px] transition-all ' />
                        <h3 className='text-[15px] font-[500] ' >Body Lotions</h3>
                    </div>
                </Link>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>
  )
}

export default HomeCatSlider;