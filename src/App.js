import { useState, useContext } from "react";
import EndScreen from "./components/EndScreen";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import "./styles.css";
import { QuizContext } from "./Helpers/Contexts";

export default function App() {
   const [gameState, setGameState] = useState("menu");
   const [score, setScore] = useState(0);

   return (
      <QuizContext.Provider
         value={{ gameState, setGameState, score, setScore }}
      >
         <div className="App">
            <h2> Quiz App</h2>
            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "endScreen" && <EndScreen />}
         </div>
      </QuizContext.Provider>
   );
}
