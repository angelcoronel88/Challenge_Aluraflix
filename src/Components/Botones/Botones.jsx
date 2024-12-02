import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Contenedor principal
const DivCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Botón general con estilos reutilizables
const Boton = styled.button`
  border: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  padding: 1.2rem 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  }
`;

// Botón específico de guardar
const BotonGuardar = styled(Boton)`
  background-color: #2a7ae4; /* Azul */
  color: #fff;

  &:hover {
    background-color: #1f5fb2; /* Azul más oscuro */
  }
`;

// Botón específico de limpiar
const BotonLimpiar = styled(Boton)`
  background-color: #9e9e9e; /* Gris */
  color: #000;

  &:hover {
    background-color: #7e7e7e; /* Gris más oscuro */
  }
`;

const Botones = ({ categoria, reset }) => {
  return (
    <>
      <DivCont className="contenedor">
        <div style={{ display: "flex", gap: "2rem" }}>
          {/* Botón Guardar */}
          <BotonGuardar type="submit" id="btnGuardar">
            Guardar
          </BotonGuardar>

          {/* Botón Limpiar */}
          <BotonLimpiar
            type="button"
            id="btnLimpiar"
            onClick={() => reset()}
          >
            Limpiar
          </BotonLimpiar>
        </div>

        {/* Botón de categoría o "Atrás" según el estado */}
        {!categoria ? (
          <Link to={"/categoria"}>
            <BotonGuardar style={{ width: "20rem" }}>Nueva Categoría</BotonGuardar>
          </Link>
        ) : (
          <Link to={"/video"}>
            <BotonGuardar>Atrás</BotonGuardar>
          </Link>
        )}
      </DivCont>
    </>
  );
};

export default Botones;
