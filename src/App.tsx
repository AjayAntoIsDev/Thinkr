import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Question1 } from './questions/Question1.tsx';

const App = () => {
  return (
    <div className={'h-screen w-screen bg-surface-a0 text-white flex flex-col'}>
      <div className={"absolute left-0 right-0"}>
      <h1 className="text-5xl font-bold text-center mt-16">
        Thin<span className={"text-primary-a0"}>kr</span></h1>
      <h2 className=" text-center mt-1 font-light text-xl text-">Ideas That Set Sail!</h2>
      </div>
        <div className={"h-full"}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          type: 'progressbar',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        freeMode={false}
        allowTouchMove={false}
        className={"h-full"}
      >
        <SwiperSlide>
          <Question1></Question1>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default App;
