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
      <SwiperSlide><img src="./public/Diastema.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="./public/Dentes-Apinhados.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="./public/Criancas-com-dentes-de-leite-e-permanentes.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="./public/Alinhamento-geral-dos-dentes.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="./public/Mordida-Aberta.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="./public/mordida-cruzada.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="./public/Prognatismo.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="./public/Sobremordida.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
    </Swiper>
  );
};
