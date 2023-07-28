import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Hooks Forms</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input placeholder="Ingrese nombre de usuario" className="form-control mb-2" {...register('usuario',{ required: true })}></input>
        {errors.usuario} */}
        <input
          {...register("usu", { required: "Usuario is required" })}
          
        />
        {errors.usu && <p role="alert">{errors.usu?.message}</p>}
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default HookForm;
