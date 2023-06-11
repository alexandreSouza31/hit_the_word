import { useState } from "react";
import "./Game.css";

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
    
    return (
        <div className="game_container">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
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
                    <form>
                        <input
                            type="text"
                            name="letter" 
                            maxLength="1" 
                            required
                            />
                        <button>Jogar!</button>
                    </form>
                </div>
            </div>
            <div className="wrong_letters_container">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter,i) => (
                    
                    <span key={i}>{letter},</span>
                ))}
            </div>
        </div >
    )
}

export default Game;