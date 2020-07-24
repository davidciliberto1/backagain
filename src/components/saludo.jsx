import React, { useState, useEffect } from "react";

function Saludo() {
  const [hola, setHola] = useState("");
        useEffect(() => {
            document.title = `${hola}`
        }); 
  return (
    <div>
      <h1>{hola}</h1>
      <input
        className="hola"
        type="text"
        placeholder="saludando"
        onChange={(e) => setHola(e.target.value)}
      />
    </div>
  );
}
export default Saludo;
