import "./Player.css"

export default function Player({playerName, playerSimbol, children}){
    return (
        <>
            <li>
                <span className='player'>
                    <span className='player-name'>{playerName}</span>
                    <span className='player-simbol'>{playerSimbol}</span>
                </span>
                <button>Cambiar</button>
            </li>
        </>
    );
}