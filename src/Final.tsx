import { usePollinationsText } from '@pollinations/react';


// @ts-ignore
export const Final = ({ onFinal, questions }) => {
  if (onFinal) {

    let text = "";
    text = usePollinationsText(JSON.stringify(questions), {
      seed: Math.random(),
      model: 'openai',
      systemPrompt: `
         You are an advanced idea generator for a coding competition. Users will provide a list of questions and their answers. Based on the answers, generate a unique and creative **project name** along with a brief **description** of what the project is about.
        
        Guidelines:
        1.The **name** should be catchy and reflect the project’s purpose.
        2.The **description** should explain the project clearly and align with the user's preferences.
        3.Ensure the idea is unique, exciting, and feasible for a coding competition.
        4.Always respond in a json format with only the name and description like this {"name":"TechQuest","description":"An engaging platform that combines technology education with fun quests and challenges, making learning tech skills exciting and interactive."}
        5.It shouldn't be a game
        
        ### Example Input:
          Q1: I’m interested in technology.
          Q2: I want to work on a project that’s fun.
          Q3: I enjoy solving real-world problems.
        
        Example Output:
          {
          "name":"TechQuest",
          "description":"An engaging platform that combines technology education with fun quests and challenges, making learning tech skills exciting and interactive."
          }
    `,
    });
    console.log(JSON.stringify(questions));
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className={' rounded-2xl bg-surface-a10 p-6 py-8'}>
          {text ? (
            <>
              <h1 className="text-5xl font-bold text-primary-a20">
                {JSON.parse(text).name}
              </h1>
              <h1 className="mt-6 w-[50vw]  text-lg">
                {JSON.parse(text).description}
              </h1>
            </>
          ) : (
            <h1 className="text-5xl font-bold ">Loading...</h1>
          )}
        </div>
      </div>
    );
  }
};
export default Final;
