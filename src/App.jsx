import { useState } from "react"
import Player from "./components/player"
function App() {
  return  <main>
    <div id="game-container"> 
      <ol id="players">
        <Player 
          initalname='Player 1'
          symbole='X'
        />
         <Player 
          initalname='Player 2'
          symbole='O'
        />
      </ol>
      game board
    </div>
    LOG
  </main> 
}

export default App
