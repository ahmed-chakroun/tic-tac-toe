import { useState } from "react"


export default function GameBoard({onSelect,board}){
    
    // const  [gameBoard,setGameBoard]=useState(initalGameBoard)
    // function handleSelectedSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard=[...prevGameBoard.map((innerArray)=>[...innerArray])]
    //         updatedBoard[rowIndex][colIndex]=playerSymbole
    //         return updatedBoard
    //     })
    //     onSelect()
    // }
    return (
        <ol id="game-board">
          {board.map((row,rowIndex)=>(<li key={rowIndex}>
          <ol>
            {row.map((playerSymbole,colIndex)=>(
            <li  key={colIndex} ><button disabled={playerSymbole!==null} onClick={()=>onSelect(rowIndex,colIndex)}>{playerSymbole}</button></li>
               )
            )}
         </ol>
          </li>))}
        </ol>
    )
}