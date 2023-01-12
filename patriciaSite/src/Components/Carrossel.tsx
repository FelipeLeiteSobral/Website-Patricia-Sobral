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
      <SwiperSlide><img src="https://i.ibb.co/BwSQ3kz/Alinhamento-geral-dos-dentes.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/NCF7VL4/Criancas-com-dentes-de-leite-e-permanentes.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/h7ZsKFX/Dentes-Apinhados.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/0sX8twN/Diastema.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/b5t3pj7/Mordida-Aberta.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/bmSNDg1/mordida-cruzada.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/Hzd6mY4/Prognatismo.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/q0kysC7/Sobremordida.png" alt="" className='object-cover w-full h-full'/></SwiperSlide>
    </Swiper>
  );
};
