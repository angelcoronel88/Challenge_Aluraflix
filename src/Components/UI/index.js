import styled from "styled-components";


export const Boton = styled.button`
    width: 18rem;
    height: 5.4rem;
    font-size: 2.1rem;
    font-weight: 600;
    color: #fff;
    padding: .8rem 2.5rem;
    border: 2px solid #fff;
    background-color: #000;
    text-align: center;

    :hover {
        background-color: #2A7AE4;
        border-color: #2A7AE4;
        cursor:pointer;
        transition: .3s ease-in-out;
    }

    @media (max-width: 768px) {
        font-size: 1.3rem;
        width: 15rem;
        height: 4rem;
    }
`;


export const BtnForm = styled.button`
    border: none;
    border-radius: .5rem;
    font-size: 20px;
    padding: 1.5rem 3rem;
    margin: 3rem 0;
    max-width: 95%;
    cursor: pointer;

    :hover {
        transform: scale(.9);
    }
`;