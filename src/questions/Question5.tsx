import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// @ts-ignore
export const Question5 = ({ swiperRef ,questions}) => {
  const [inputValue, setInputValue] = useState('');
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">
        I’d like the result of my project to be <br/>
        <input
          type="text"
          placeholder="an app, a website, etc."
          onChange={(e) => setInputValue(e.target.value)}
          className="blinking-underline border-b-[6px] border-surface-tonal-a50 bg-transparent text-white !underline-offset-8 placeholder:text-surface-tonal-a50 focus:outline-none"
        />
      </h1>
      <button
        className={
          'mt-12 flex items-center justify-center gap-2 rounded-lg bg-primary-a30 p-2 px-5 text-2xl font-semibold text-surface-a0 disabled:cursor-not-allowed disabled:opacity-40'
        }
        disabled={!inputValue.trim()}
        onClick={() =>{goToNextSlide();questions["I’d like the result of my project to be "]=inputValue}}
      >
        Next <ArrowRight strokeWidth={'3px'} height={'26px'} width={'26px'} />
      </button>
    </div>
  );
};