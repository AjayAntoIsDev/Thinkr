import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// @ts-ignore
export const Question4 = ({ swiperRef,questions }) => {
  const [inputValue, setInputValue] = useState('');
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold w-screen">
        Something I’m really good at is{" "}
        <input
          type="text"
          placeholder="designing, brainstorming, programming, etc."
          className="blinking-underline border-b-[6px] border-surface-tonal-a50 bg-transparent text-white !underline-offset-8 placeholder:text-surface-tonal-a50 focus:outline-none"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </h1>
      <button
        className={
          'mt-12 flex items-center justify-center gap-2 rounded-lg bg-primary-a30 p-2 px-5 text-2xl font-semibold text-surface-a0 disabled:cursor-not-allowed disabled:opacity-40'
        }
        onClick={() =>{goToNextSlide();questions["question4"]=inputValue}}
        disabled={!inputValue.trim()}
      >
        Next <ArrowRight strokeWidth={'3px'} height={'26px'} width={'26px'} />
      </button>
    </div>
  );
};