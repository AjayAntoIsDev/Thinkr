import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Question1 } from './questions/Question1.tsx';
import { Question2 } from '@/questions/Question2.tsx';
import { Question3 } from '@/questions/Question3.tsx';
import { Question4 } from '@/questions/Question4.tsx';
import { useRef } from 'react';

const App = () => {

  const swiperRef = useRef(null);

  return (
    <div className={'flex h-screen w-screen flex-col bg-surface-a0 text-white'}>
      <div className={'absolute left-0 right-0'}>
        <h1 className="mt-16 text-center text-5xl font-bold">
          Thin<span className={'text-primary-a0'}>kr</span>
        </h1>
        <h2 className="mt-1 text-center text-xl font-light">
          Ideas That Set Sail!
        </h2>
      </div>
      <div className={'h-full'}>
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
          className={'h-full'}
          onSwiper={(swiper) => {
            // @ts-ignore - SwiperRef type is not defined
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <Question1 swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Question2 swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Question3 swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Question4 swiperRef={swiperRef} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;


