import React, {useState} from "react";

function Saludo(){

    
        const [hola, setHola] = useState('') 
     
  return (
    <div>
      <h1>{hola}</h1>
      <input
       className="input" 
       type="text" 
       placeholder="saludando"
       onChange={e => setHola(e.target.value)}
       />
    </div>
  );
};
export default Saludo;
