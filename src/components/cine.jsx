import React, { useState, useEffect } from "react";

const Prueba = () => {
  const datos = [
  
  ];

  const [equipo, setEquipo] = useState();

  useEffect(() => {
 obtenerDatos()
 console.log(obtenerDatos())
  }, [])
const obtenerDatos = async () => {
  // const data = fetch();
  //   const users = await data.json()
  //   console.log(users);
  
  }
  
  return (
    <div>
      <h1>{Prueba}</h1>
    </div>
  )
};

export default Prueba;
