import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css/bundle';

export default () => {
  return (
    <Swiper 
    className="font-bold"
    navigation={true}
    modules={[Navigation]}
    spaceBetween={100}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://ibb.co/1bwPQcv" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://ibb.co/kBGMHhd" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://ibb.co/HFx7rTN" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://ibb.co/z65jJkc" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://ibb.co/B2kP8Hw" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://ibb.co/YQzfw72" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://ibb.co/wWsVDCg" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://ibb.co/Rhzv0NY" alt="" className='object-cover w-full h-full'/></SwiperSlide>
    </Swiper>
  );
};
