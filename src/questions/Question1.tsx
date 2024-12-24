import { ArrowRight } from 'lucide-react';

export const Question1 = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">
        I’m interested in{' '}
        <input
          type="text"
          placeholder="technology, art, fashion, etc."
          className="blinking-underline w-[57.7vw] border-b-[6px] border-surface-tonal-a50 bg-transparent text-white !underline-offset-8 placeholder:text-surface-tonal-a50 focus:outline-none"
        />
      </h1>
      <button
        className={
          'mt-8 flex items-center justify-center gap-2 rounded-lg bg-primary-a30 p-2 px-5 text-2xl font-semibold text-surface-a0'
        }
      >
        Next <ArrowRight strokeWidth={'3px'} height={'26px'} width={'26px'} />
      </button>
    </div>
  );
};
