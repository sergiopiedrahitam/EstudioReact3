import { use } from "react";
import "./Player.css"
import { useState } from "react";

export default function Player({initialName, initialSimbol, children}){

    const [isEditing,setIsEditing]= useState(false)
    const [playerName,setPlayerName] = useState(initialName)
    const [simbolName,setSimbolName] = useState(initialSimbol)
   
    function handleChangeClick(){
        setIsEditing((isEditing)=>!isEditing); //valor => true
        // setIsEditing((isEditing)=>!isEditing); //valor => false
      }
    
        function handleNameChange(event){
            setPlayerName(event.target.value);
        }

    function handleSimbolChange(event){
        setSimbolName(event.target.value);
    }
    
    const playerNameField = isEditing
    ? (<input type="text" name="" id="" required placeholder={playerName} onChange={(event)=>handleNameChange(event)}/>)
    : (<span className='player-name'>{playerName}</span>)

    const playerNameSimbol = isEditing
    ? (<input type="text" name="" id="" required placeholder={simbolName} onChange={(event)=>handleSimbolChange(event)}/>)
    : <span className='player-simbol'>{simbolName}</span>

    const buttonChangeValue = isEditing
    ? "Guardar"
    : "Cambiar"

    return (
        <>
            <li>
                <span className='player'>
                    {playerNameField}
                    {playerNameSimbol}
                    {/* <span className='player-simbol'>{playerSimbol}</span> */}
                </span>
                <button onClick={()=>handleChangeClick()}>{buttonChangeValue}</button>
            </li>
        </>
    );
}