import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EjemploUno = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data,e) => {
    console.log(data);
    setEntradas([...Entradas, data]);
    e.target.reset();
  };

  return (
    <>
      <h1>Ejemplo Uno</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Ingrese Titulo"
          className="form-control my-2"
          {...register("titulo", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        ></input>
        {errors.titulo && <span>This field is required</span>}
        <input
          placeholder="Ingrese Descripcion"
          className="form-control my-2"
          {...register("descripcion", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        ></input>
        {errors.descripcion && <span>This field is required</span>}
        <button className="btn btn-primary">Agregar</button>
      </form>
      <ul>
        {
            Entradas.map(item => 
                <li>{item.titulo} - {item.descripcion}</li>
                )
        }
      </ul>
    </>
  );
};

export default EjemploUno;
