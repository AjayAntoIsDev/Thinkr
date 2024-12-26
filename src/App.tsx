import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Question1 } from './questions/Question1.tsx';
import { Question2 } from '@/questions/Question2.tsx';
import { Question3 } from '@/questions/Question3.tsx';
import { Question4 } from '@/questions/Question4.tsx';
import { useRef, useState } from 'react';
import { Question5 } from '@/questions/Question5.tsx';
import { Question6 } from '@/questions/Question6.tsx';
import { Question7 } from '@/questions/Question7.tsx';
import { Final } from '@/Final.tsx';

let questions: { [key: string]: string } = {
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
  question6: '',
  question7: '',
};

const App = () => {

  const swiperRef = useRef(null);
  const [onFinal,setOnFinal] = useState(false);
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
            <Question1 swiperRef={swiperRef} questions={questions}/>
          </SwiperSlide>
          <SwiperSlide>
            <Question2 swiperRef={swiperRef} questions={questions}/>
          </SwiperSlide>
          <SwiperSlide>
            <Question3 swiperRef={swiperRef} questions={questions}/>
          </SwiperSlide>
          <SwiperSlide>
            <Question4 swiperRef={swiperRef} questions={questions}/>
          </SwiperSlide>
          <SwiperSlide>
            <Question5 swiperRef={swiperRef} questions={questions}/>
          </SwiperSlide>
          <SwiperSlide>
            <Question6 swiperRef={swiperRef} questions={questions}/>
          </SwiperSlide>
          <SwiperSlide>
            <Question7 swiperRef={swiperRef} questions={questions}  setOnFinal={setOnFinal}/>
          </SwiperSlide>
          <SwiperSlide>
            <Final questions={questions} onFinal={onFinal}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;