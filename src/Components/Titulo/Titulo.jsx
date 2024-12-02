import styled from "styled-components";


const Title = styled.h1`
    max-width: 100%;
    color: #ffffff;
    padding: .5rem 1rem;
    display: inline;
    font-size: 3.5rem;
    font-weight: 400;

    @media (max-width: 1035px) {
        font-size: 2.5rem;
    }
    `;

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;

const Parrafo = styled.p`
    color: #fff;
    font-weight: 400;
    font-size: 1.8rem;
    margin: 0;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`

const Titulo = ({ colorPrimario, titulo, descripcion }) => {

    return (
    <Div>
        <Title style={{ backgroundColor: colorPrimario }} >{titulo}</Title>
        <Parrafo>{descripcion}</Parrafo>
    </Div>

    )
}

export default Titulo;