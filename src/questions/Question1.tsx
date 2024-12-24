export const Question1 = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-full">
      <h1 className="text-5xl font-bold">
        I’m interested in{' '}
        <input
          type="text"
          placeholder="technology, art, helping the environment"
          className="bg-transparent border-b-[6px] border-surface-tonal-a50 focus:outline-none text-white placeholder:text-surface-tonal-a50 blinking-underline !underline-offset-8 w-[57.7vw]"
        />
      </h1>
      <button className={"text-2xl bg-primary-a30 text-black p-2 rounded-lg px-5 font-semibold mt-6"}>Next</button>
    </div>
  );
};