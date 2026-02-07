import { useState } from "react"

export default function Player({initalname ,symbole}){
    const [name,setName]=useState(initalname)
    const [isClicked,setisClicked]=useState(false)
    
    function saveInputtext(event){
        setName(event.target.value)
    }
    function changeContent(){
        setisClicked(editing=>!editing)
    }
    

    let playerName=<span className="player-name">{name}</span>

    if(isClicked){
        playerName=<input value={name} onChange={saveInputtext} type="text" required/>
    }

    return (
    <>
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbole">{symbole}</span>
            </span>
    <button onClick={changeContent}>{isClicked?'Save':'edit'}</button>
        </li>
    </>     
    )
}