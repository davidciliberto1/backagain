import React, { useState } from 'react'

function Edad() {
    const [edad, setEdad] = useState()


return (
<div><p> Edad: {edad}</p>
<input 
type="number"
placeholder='edad'
onChange={e => setEdad(e.target.value)}
></input>
</div>
)}
export default Edad;