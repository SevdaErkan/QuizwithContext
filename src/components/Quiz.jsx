import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

const Quiz = () => {
   const { score, setScore, setGameState } = useContext(QuizContext);
   const [currentQ, setCurrentQ] = useState(0);
   const [opChosen, setOpChosen] = useState("");

   const nextQ = () => {
      if (Questions[currentQ].answer === opChosen) {
         setScore(score + 1);
      }
      setCurrentQ(currentQ + 1);
   };
   const finishQ = () => {
      if (Questions[currentQ].answer === opChosen) {
         setScore(score + 1);
      }
      setGameState("endScreen");
   };

   return (
      <div className="quiz">
         <h1>{Questions[currentQ].prompt}</h1>
         <div className="wrap">
            <button onClick={() => setOpChosen("optionA")}>
               {Questions[currentQ].optionA}
            </button>
            <button onClick={() => setOpChosen("optionB")}>
               {Questions[currentQ].optionB}
            </button>
            <button onClick={() => setOpChosen("optionC")}>
               {Questions[currentQ].optionC}
            </button>
            <button onClick={() => setOpChosen("optionD")}>
               {Questions[currentQ].optionD}
            </button>
         </div>
         {currentQ == Questions.length - 1 ? (
            <button onClick={finishQ}>Quiz Done</button>
         ) : (
            <button onClick={nextQ}>Next Question</button>
         )}
      </div>
   );
};
export default Quiz;
