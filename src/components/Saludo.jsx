import React, { PureComponent } from "react";

const Saludo = (props) => {
  return (
    <>
      <h2>Hola! {props.persona}</h2>
    </>
  );
};

export default Saludo;
