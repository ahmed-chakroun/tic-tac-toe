import { useState } from "react"
import Player from "./components/player"
import GameBoard from "./components/gameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning_combination"
import GameOver from "./GameOver"
const PLAYERS={
      x:'player 1',
      o:'player 2'
    }
function   derivingActivePlayer(gameTurns){
   let currentplayer = 'x'
      if (gameTurns.length > 0 && gameTurns[0].player === 'x') {
        currentplayer = 'o'
      }
    return currentplayer
}
function dervingWinner(gameBoard,player){
  let winner=null
  for(const combination of WINNING_COMBINATIONS){
    const firstsquare=gameBoard[combination[0].row][combination[0].column]
    const secondsquare=gameBoard[combination[1].row][combination[1].column]
    const thirdsquare=gameBoard[combination[2].row][combination[2].column]
  if(firstsquare && firstsquare===secondsquare && firstsquare===thirdsquare){
    winner=player[firstsquare]

   }
  }
  return winner
}
function derivingGameBoard(gameTurns){
   let gameBoard=[...initalGameBoard.map(array=>[...array])]
    for(const turn of gameTurns){
        const {square,player}=turn
        const {col,row}=square
        gameBoard[col][row]=player
    }
    return gameBoard
}

 const initalGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
function App() {
  const [player,setPlayer]=useState(
    PLAYERS
    )

  const [gameTurns, setGameTurns] = useState([])
  let activPlayer=derivingActivePlayer(gameTurns)
  const gameBoard=derivingGameBoard(gameTurns)
  const winner=dervingWinner(gameBoard,player)
  const hasDraw=gameTurns.length===9&&!winner

  function handleRematch(){
    setGameTurns([])
  }
  function handleSelectSquare(colIndex, rowIndex) {
    setGameTurns((prevturns) => {
      let currentplayer=derivingActivePlayer(prevturns)
      const updatedgameturns = [{ square: { col: colIndex, row: rowIndex }, player: currentplayer }, ...prevturns]
      return updatedgameturns
    })
  }
    function chngeNameofPlayer(symbol,newname){
    setPlayer((prevPlayer)=>{
    return{
      ...prevPlayer,[symbol]:newname
    }
    })
  }
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          isActive={activPlayer === 'x'}
          initalname='Player 1'
          symbole='x'
          onchangeName={chngeNameofPlayer}
        />
        <Player
          isActive={activPlayer === 'o'}
          initalname='Player 2'
          symbole='o'
          onchangeName={chngeNameofPlayer}
        />
      </ol>
      {(winner ||hasDraw) &&<GameOver isClicked={handleRematch} winner={winner}/>}
      <GameBoard
        onSelect={handleSelectSquare}
        board={gameBoard}
      />
    </div>
    
    <Log
      turns={gameTurns}
    />
  </main>
}

export default App
