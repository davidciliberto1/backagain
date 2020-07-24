import React, { useState } from 'react'

function Nombre() {
    const [nombre, setNombre] = useState('')

    return (
        <div>
            <h1>Nombre: {nombre}</h1>
            <input
            type='text' 
            placeholder='Nombre'
            onChange={e => setNombre(e.target.value)}>
            </input>
        </div>
    )
}
export default Nombre;