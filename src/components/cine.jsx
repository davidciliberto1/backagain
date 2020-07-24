import React, { useState, useEffect } from "react";

const Prueba = () => {
  const datos = [
  
  ];

  const [equipo, setEquipo] = useState('');

  useEffect(() => {
 obtenerDatos()  
  }, [])
const obtenerDatos = async () => {
  const data = await fetch('https://imdb8.p.rapidapi.com/title/get-top-stripe')
  const users = await data.json()
}
  return (
    <div>
      <h1>{Prueba}</h1>
    </div>
  )
};

export default Prueba;
