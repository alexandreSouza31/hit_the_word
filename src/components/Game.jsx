import "./Game.css";

const Game = ({endGame}) => {
    return (
        <div>
            <h2>Qual é a palavra?</h2>
            <button onClick={endGame}>Terminar jogo</button>
        </div>
    )
}

export default Game;