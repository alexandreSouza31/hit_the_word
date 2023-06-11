import "./StartScreen.css";

const StartScreen = ({startGame}) => {    
    return (
        <div className="start_container">
            <h1>Hit the Word</h1>
            <p>Está preparado pro desafio?</p>
            <button autoFocus  onClick={startGame}>Começar jogo</button>
        </div>
    )
}

export default StartScreen