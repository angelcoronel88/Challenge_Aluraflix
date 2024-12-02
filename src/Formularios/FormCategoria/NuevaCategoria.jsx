import React from "react";
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import Botones from "../../Components/Botones/Botones";
import DataTable from "../DataTable/DataTable";

import { useState } from "react";
import { validarTitulo, validarDescripcion } from "../FormVideo/validaciones";
import { rgbToHex } from "@mui/material";


const Heading = styled.h1`
    color: #fff;
    height: .7rem;
    font-size: 5rem;
    font-weight: 400;
    margin: 1.4rem 0 5.4rem 0;
    padding: 1rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const CssTextField = styled(TextField)({
    '& label': {
        color: '#fff',
        fontSize: '1.5rem'
    },
    '& color': {
        color: "#fff"
    }
});



const styles = {
    backgroundColor: '#5c5c5c',
    borderRadius: '1rem',
    margin: '3rem 0'
}


const InputColor = styled.input`
    width: 100%;
    height: 3rem;
    background-color: #5c5c5c;
    border: none;
`;




const NuevaCategoria = ({ categorias, guardarCategoria, eliminarCategoria }) => {

    const [titulo, setTitulo] = useState({ value: '', valid: null })
    const [descripcion, setDescripcion] = useState({ value: '', valid: null })
    const [colorPrimario, setColorPrimario] = useState({ value: '#000000' })

    const manejarCambio = (e) => {

        const color = rgbToHex(e.target.value);
        setColorPrimario({ value: color });
    }

    function manejarNuevaCategoria(e) {
        e.preventDefault();
        guardarCategoria({
            titulo: titulo.value,
            colorPrimario: colorPrimario.value,
            descripcion: descripcion.value,
        })

        setTimeout(() => {
            setTitulo({ value: '' });
            setDescripcion({ value: '' });
            setColorPrimario({ value: '#000000' });
        }, 1500);

    }

    async function reset() {
        const valor = '';

        try {
            setTitulo({ value: valor, valid: null });
            setDescripcion({ value: valor, valid: null });
            setColorPrimario({ value: '#000000' })
        } catch (error) {
            console.log(error);
        }
    }


    function editarCategoria(idTabla) {

        alert('¡¡IMPORTANTE!! Si modifícas el nombre de la categoria se perderán los videos guardados.')

        const categoriaSeleccionada = categorias.filter(categoria => categoria.id === idTabla);

        const { colorPrimario, descripcion, titulo } = categoriaSeleccionada[0];

        setTitulo({ value: titulo });
        setDescripcion({ value: descripcion });
        setColorPrimario({ value: colorPrimario });


        eliminarCategoria(idTabla)
    }

    return (

        <div className="contenedor">

            <Heading>Nueva Categoría</Heading>

            <form
                onSubmit={manejarNuevaCategoria}
            >
                <CssTextField
                    id="nombre"
                    label="Nombre"
                    variant="filled"
                    fullWidth
                    required
                    margin="dense"
                    style={styles}
                    sx={{ input: { color: '#fff', fontSize: '1.8rem' } }}
                    value={titulo.value}
                    onChange={(e) => {
                        const valor = e.target.value;
                        const valido = validarTitulo(valor);

                        setTitulo({ value: valor, valid: valido })
                    }}
                />

                <CssTextField
                    id="descripcion"
                    label="Descripción"
                    rows={4}
                    variant="filled"
                    fullWidth
                    style={styles}
                    sx={{ input: { color: '#fff', fontSize: '1.8rem' } }}
                    required
                    value={descripcion.value}
                    onChange={(e) => {
                        const valor = e.target.value;
                        const valido = validarDescripcion(valor);

                        setDescripcion({ value: valor, valid: valido })
                    }}
                />


                <div style={
                    {
                        backgroundColor: '#5c5c5c',
                        color: '#fff',
                        fontSize: '1.5rem',
                        padding: '1rem 1.5rem',
                        borderRadius: '1rem'
                    }}>

                    <label htmlFor="color">Color</label>
                    <InputColor
                        type="color"
                        id="color"
                        name="color"
                        value={colorPrimario.value}
                        onChange={manejarCambio}
                    />
                </div>


                <Botones categoria={true} reset={reset} />

            </form>

            <DataTable editarCategoria={editarCategoria} eliminarCategoria={eliminarCategoria} categorias={categorias} data={{ setTitulo, setDescripcion, setColorPrimario }} />

        </div>
    )
}

export default NuevaCategoria;