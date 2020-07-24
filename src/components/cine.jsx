import React, { useState, useEffect } from "react";

const Prueba = () => {
  const datos = [
    { id: 1, name: "david" },
    { id: 2, name: "lali" },
    { id: 3, name: "ana" },
  ];

  const [equipo, setEquipo] = useState(null);

  useEffect(() => {
    setEquipo(datos);
  }, []);

  return (
    <div>
      <h1>erg</h1>
    </div>
  );
};

export default Prueba;
