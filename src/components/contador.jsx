import React, { useState } from 'react'

function Contador() {
const [cuenta, setCuenta] = useState(0)

return( 
    <div className='contador'> <p>Clickeaste {cuenta} veces.</p> 
    <button
    className='buttonSuma' 
    onClick={() => setCuenta(cuenta + 1)}
    > Click me </button>
    <button onClick={() => setCuenta(cuenta - 1)}
    > Resta cuenta </button>
    </div>
)}

export default Contador;
