import { use } from "react";
import "./Player.css"
import { useState } from "react";

export default function Player({playerName, playerSimbol, children}){
    const [isEditing,setIsEditing]= useState(false)
    console.log("estoy ejecutando el componete Player");
    

    function handleChangeClick(){
        setIsEditing((isEditing)=>!isEditing); //valor => true
        // setIsEditing((isEditing)=>!isEditing); //valor => false
      }
    
    const playerNameField = isEditing
    ? (<input type="text" name="" id="" required defaultValue={playerName}/>)
    // ? (<input type="text" name="" id="" required placeholder={playerName}/>)
    : (<span className='player-name'>{playerName}</span>)

    const buttonChangeValue = isEditing
    ? "Guardar"
    : "Cambiar"

    return (
        <>
            <li>
                <span className='player'>
                    {playerNameField}
                    <span className='player-simbol'>{playerSimbol}</span>
                </span>
                <button onClick={()=>handleChangeClick()}>{buttonChangeValue}</button>
            </li>
        </>
    );
}