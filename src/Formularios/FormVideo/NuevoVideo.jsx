import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Select, MenuItem, InputLabel, FormControl, InputAdornment } from "@mui/material";
import { VideoLibrary, Image, Descripcion, Link as LinkIcon } from "@mui/icons-material";
import Botones from "../../Components/Botones/Botones";
import Spinner from "../../Components/Spinner/Spinner";
import { Navigate } from "react-router-dom";
import { validarTitulo, validarLink, validarDescripcion } from "./validaciones";

const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 400;
  margin: 2rem 0 4rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #333;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "#aaa",
    fontSize: "1.5rem",
  },
  "& .MuiInputBase-root": {
    color: "#fff",
    fontSize: "1.8rem",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#444",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "#555",
  },
  "& .Mui-error": {
    color: "#ff6b6b",
  },
});

const StyledSelect = styled(Select)({
  "& .MuiInputBase-root": {
    backgroundColor: "#444",
    color: "#fff",
    fontSize: "1.8rem",
  },
  "&:hover .MuiInputBase-root": {
    backgroundColor: "#555",
  },
});

const NuevoVideo = ({ guardarVideo, categorias }) => {
  // Estados
  const [titulo, setTitulo] = useState({ value: "", valid: null });
  const [link, setLink] = useState({ value: "", valid: null });
  const [imagen, setImagen] = useState({ value: "", valid: null });
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState({ value: "", valid: null });
  const [loader, setLoader] = useState(false);
  const [redirect, setRedirect] = useState(false);

  // Manejar envío del formulario
  const manejarNuevoVideo = (e) => {
    e.preventDefault();

    guardarVideo({
      titulo: titulo.value,
      categoria,
      link: link.value,
      imagen: imagen.value,
    });

    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      setRedirect(true);
    }, 3000);
  };

  return (
    <FormContainer>
      <Heading>Nuevo Video</Heading>

      <StyledForm onSubmit={manejarNuevoVideo}>
        {/* Campo Título */}
        <StyledField
          label="Título"
          variant="filled"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VideoLibrary style={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          value={titulo.value}
          onChange={(e) => {
            const valor = e.target.value;
            const valido = validarTitulo(valor);
            setTitulo({ value: valor, valid: valido });
          }}
          error={titulo.valid === false}
          helperText={titulo.valid === false ? "Debe tener al menos 5 caracteres" : ""}
        />

        {/* Campo Link */}
        <StyledField
          label="Link del Video"
          variant="filled"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon style={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          value={link.value}
          onChange={(e) => {
            const valor = e.target.value;
            const valido = validarLink(valor);
            setLink({ value: valor, valid: valido });
          }}
          error={link.valid === false}
          helperText={link.valid === false ? "Ingresa un link válido" : ""}
        />

        {/* Campo Imagen */}
        <StyledField
          label="Link de la Imagen"
          variant="filled"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image style={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          value={imagen.value}
          onChange={(e) => setImagen({ value: e.target.value, valid: null })}
          error={imagen.valid === false}
          helperText={imagen.valid === false ? "Ingresa un link válido" : ""}
        />

        {/* Select Categoría */}
        <FormControl variant="filled" fullWidth>
          <InputLabel style={{ color: "#aaa", fontSize: "1.5rem" }}>
            Categoría
          </InputLabel>
          <StyledSelect
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {categorias.map((cat) => (
              <MenuItem key={cat.id} value={cat.titulo}>
                {cat.titulo}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>

        {/* Campo Descripción */}
        <StyledField
          label="Descripción"
          variant="filled"
          multiline
          rows={4}
          fullWidth
          value={descripcion.value}
          onChange={(e) => {
            const valor = e.target.value;
            const valido = validarDescripcion(valor);
            setDescripcion({ value: valor, valid: valido });
          }}
        />

        {/* Botones */}
        <Botones reset={() => setTitulo({ value: "", valid: null })} />

        {/* Loader o redirección */}
        {loader && <Spinner />}
        {redirect && <Navigate to="/" />}
      </StyledForm>
    </FormContainer>
  );
};

export default NuevoVideo;
