//hooks
import { useState } from 'react';

//css
import './App.css'

//components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

//data
import { wordsList } from "./data/words";//dessa forma importo variáveis sem o default

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameState] = useState(stages[0].name);//inicio no start
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameState(stages[1].name);
  }
  
  const endGame = () => {
    setGameState(stages[2].name);
  }

  const retry = () => {
    setGameState(stages[0].name);
  }

  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={ startGame} />}
      {gameStage === "game" && <Game endGame={ endGame} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  )
}

export default App
