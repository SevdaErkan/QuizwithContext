import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

const EndScreen = () => {
   const { score, setScore, setGameState } = useContext(QuizContext);
   return (
      <div className="end">
         <h1>Quiz Finished</h1>
         <h3>
            Score: {score}/ {Questions.length}
         </h3>
         <button
            onClick={() => {
               setGameState("menu");
               setScore(0);
            }}
         >
            ReStart Quiz
         </button>
      </div>
   );
};
export default EndScreen;
