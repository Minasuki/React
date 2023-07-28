import React, { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    console.log("me diste un clic");
    setNumero(numero + 1);
  };

  return (
    <>
      <h3>Hola mundo de React {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>
    </>
  );
};

export default Contador;
