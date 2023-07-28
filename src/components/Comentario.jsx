import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
  return (
    <>
      <h1>Comentarios</h1>
      <hr className="bg-light"/>
      <div className="media">
        {/* <img src={sujeto.avatarUrl} className="mr-3"></img> */}
        <Avatar urlImagen={sujeto.urlImagen}/>
        <div className="media-body">
          <h5 className="mt-0">{sujeto.nombre}</h5>
          {sujeto.texto}
        </div>
      </div>
    </>
  );
};

export default Comentario;
