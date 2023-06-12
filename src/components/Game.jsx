import { useRef, useState } from "react";
import "./Game.css";

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
    const [letter, setLetter] = useState("");

    const letterInputRef = useRef(null);//o useRef cria uma referência em algum lugar, como se fosse o DOM

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter);//disparo a função com a letra

        setLetter("");//deixo vazio após utilizar
        letterInputRef.current.focus();
    }

    return (
        <div className="game_container">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p className="obs">obs: Não esqueça dos acentos!</p>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="word_container">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (

                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blank_square"></span>
                    )
                    // se a letra já tiver sido adivinhada, imprimo
                ))}


            </div>
            <div className="letter_container">
                <p>Tente adivinhar uma letra da palavra:</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="letter"
                            maxLength="1"
                            required
                            onChange={(e) => setLetter(e.target.value)}
                            value={letter}
                            ref={letterInputRef}//como se eu tivesse selecionado esse elemento no dom
                            autoFocus
                        />
                        <button>Jogar!</button>
                    </form>
                </div>
            </div>
            <div className="wrong_letters_container">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (

                    <span key={i}>{letter},</span>
                ))}
            </div>
        </div >
    )
}

export default Game;