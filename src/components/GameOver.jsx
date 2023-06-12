import "./GameOver.css";

const GameOver = ({retry,score}) => {
    return (
        <div className="game_over_container">
            <h2>Fim de jogo!</h2>
            <h3>A sua pontuação foi: <span>{score}</span></h3>
            <button autoFocus  onClick={retry}>Começar novamente</button>
        </div>
    )
}

export default GameOver;