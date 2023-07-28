import React, { useState } from "react";

const Lista = () => {
  const [arrayNumero, setArrayNumero] = useState([1, 2, 3, 4, 5]);

  const [numero, setNumero] = useState(6);

  const agregarElemento = () => {
    setNumero(numero + 1);
    //console.log("clic");
    setArrayNumero([...arrayNumero, numero]);
  };

  return (
    <>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {arrayNumero.map((item, index) => (
        <p key={index}>
          {" "}
          {item}- {index}
        </p>
      ))}
    </>
  );
};

export default Lista;
