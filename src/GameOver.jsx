export default function GameOver({isClicked,winner}){
    return(
      <div id="game-over">
        <h2>Game Over</h2>
        {winner?<p>{winner} Won!</p>:<p>it's a draw!</p>}
        <button onClick={isClicked}>rematch</button>
      </div>
    )
}