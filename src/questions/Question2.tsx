import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// @ts-ignore
export const Question2 = ({ swiperRef,questions }) => {
  const [inputValue, setInputValue] = useState('');
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold w-screen">
        I want to work on a project that’s{' '}
        <input
          type="text"
          placeholder="fun, practical, etc."
          className="blinking-underline border-b-[6px] border-surface-tonal-a50 bg-transparent text-white !underline-offset-8 placeholder:text-surface-tonal-a50 focus:outline-none w-max"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </h1>
      <button
        className={
          'mt-12 flex items-center justify-center gap-2 rounded-lg bg-primary-a30 p-2 px-5 text-2xl font-semibold text-surface-a0 disabled:cursor-not-allowed disabled:opacity-40'
        }
        disabled={!inputValue.trim()}
        onClick={() =>{goToNextSlide();questions["I want to work on a project that’s"]=inputValue}}
      >
        Next <ArrowRight strokeWidth={'3px'} height={'26px'} width={'26px'} />
      </button>
    </div>
  );
};