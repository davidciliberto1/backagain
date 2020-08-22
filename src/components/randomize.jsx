import React from 'react'

export default function Randomize() {
let randomNumber = Math.random() * 10;
function shuffle() {
    
}
    return (
    <div><h1>{randomNumber}</h1><br/>
<button 
className='boton-random'
onClick={shuffle}
>Randomize</button>
        </div>
    )
}
