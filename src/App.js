import Contador from "./components/Contador";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import FormHook from "./components/FormHook";
import EjemploUno from "./components/EjemploUno";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
  const sujeto = {
    nombre: "Juanito",
    urlImagen: "https://via.placeholder.com/64",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };

  return (
    <div className="App container mt-5">
      <h1>Hola Mudo XD</h1>
      <Contador />
      <Lista />
      <Formulario />
      <FormHook />
      <EjemploUno />
      <Comentario sujeto={sujeto} />
      <Saludo persona="juanito" />
      <Saludo persona="pedrito" />
    </div>
  );
}

export default App;
