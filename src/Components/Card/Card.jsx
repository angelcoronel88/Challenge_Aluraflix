import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa"; // Importamos el ícono de la papelera

const Img = styled.img`
  max-width: 100%;
  border: 4px solid;
  width: 40rem;
`;

const BotonEliminar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Espacio entre ícono y texto */
  border-radius: 1rem;
  background-color: #e63946; /* Rojo más estético */
  color: #fff;
  padding: 0.8rem 1.5rem;
  margin: 0.5rem 0 0 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.6rem; /* Tamaño del texto */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c53030; /* Cambio de color al pasar el cursor */
  }

  &:active {
    background-color: #a41e1e; /* Color más oscuro al hacer clic */
  }
`;

const Card = (props) => {
  const { link, imagen, id } = props.datos;
  const { eliminarVideo } = props;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <Img src={imagen} alt="Miniatura Video" style={{ borderColor: props.colorPrimario }} />
        </a>
      </div>

      <BotonEliminar
        onClick={() => {
          eliminarVideo(id);
        }}
      >
        <FaTrashAlt /> {/* Ícono de papelera */}
        Eliminar {/* Texto opcional */}
      </BotonEliminar>
    </>
  );
};

export default Card;
