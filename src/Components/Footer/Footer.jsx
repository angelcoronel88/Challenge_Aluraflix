import styled from "styled-components";
import Logotipo from "../Logotipo/Logo";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = styled.footer`
    background: linear-gradient(180deg, #1a1a1a, #000);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 4rem;
    border-top: 3px solid #2A7AE4;
    margin-top: 5rem;
    text-align: center;
`;

const Parrafo = styled.p`
    color: #f1f1f1;
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 2rem;
    line-height: 1.8;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;

    a {
        color: #2A7AE4;
        font-size: 2.4rem;
        transition: color 0.3s ease;

        &:hover {
            color: #6BD1FF;
        }
    }
`;

const FooterHeading = styled.h3`
    color: #f1f1f1;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: bold;
`;

const PieDePagina = () => {
    return (
        <Footer>
            <Logotipo footer={true} />
            <FooterHeading>Angel's Portfolio</FooterHeading>
            <SocialIcons>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                </a>
            </SocialIcons>
            <Parrafo>Desarrollado por Angel - 2024</Parrafo>
        </Footer>
    );
};

export default PieDePagina;
