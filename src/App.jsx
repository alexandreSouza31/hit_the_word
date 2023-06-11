//hooks
import { useEffect, useState } from 'react';

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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState([3]);//terá 3 tentativas, mas posso mudar
  const [score, setScore] = useState([0]);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    /* irá receber um numero aleatório de zero até o número de categorias
    que eu tenho. Como o Math.random dá um número quebrado, nesse caso vou
    arredondar pra baixo usando o floor. */

    console.log(category);

    const word = words[category][Math.floor(Math.random() * words[category].length)];
    // com isso eu terei a palavra aleatória dentro da sua categoria
    console.log(word);

    return { category, word };//retorno como objeto pra desestruturar em objeto
  }

  const startGame = () => {
    const { category, word } = pickWordAndCategory();

    //transformar array em letras
    let wordLetters = word.split("");//ele vai separar a palavra por todas as letras.
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())/*caso no banco haja palavras
    diferenciadas por maiúsculas e minúsculas já padronizo pra serem todas minúsculas aqui!*/
    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameState(stages[1].name);
  }

  const verifyLetter = (letter) => {
    const standardizeLetter = letter.toLowerCase();

    //a letra já foi utilizada?
    if (guessedLetters.includes(standardizeLetter) || wrongLetters.includes(standardizeLetter)) {
      return;
    }

    //inclui letra ou perde uma chance
    if (letters.includes(standardizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, standardizeLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, standardizeLetter
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }
  
  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses <= 0) {//termina o jogo caso terminem as chances

      clearLetterStates();
      setGameState(stages[2].name);
      
    }
  }, [guesses]);//o elemento a ser observado será o guesses

console.log(guessedLetters);
console.log(wrongLetters);

  const retry = () => {
    setGuesses(3);
  setGameState(stages[0].name);
}

return (
  <div className='App'>
    {gameStage === "start" && <StartScreen startGame={startGame} />}
    {gameStage === "game" &&
      <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
    {gameStage === "end" && <GameOver retry={retry} />}
  </div>
)
}

export default App
