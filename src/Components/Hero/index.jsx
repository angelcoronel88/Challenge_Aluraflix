import styled from "styled-components";
import hero from "../../assets/img/hero.png";
import imagenHero from "../../assets/img/imagen-hero.png";

const HeroBg = styled.div`
      background-image: url(${hero});
      background-repeat: no-repeat;
      width: 100%;
      height: 70rem;
      background-position: center;
      position: relative;

      @media (min-width: 1200px) {
        height: 60rem;
      }

      @media (max-width: 480px) {
        height: 55rem;
      }
    `;

const ContenidoHero = styled.div`
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.5893009303330707) 35%, rgba(0,0,0,1) 90%, rgba(27,27,27,1) 100%);
        width: 100%;
        height: 100%;
        padding: 0 6rem 12.5rem 6rem;
        display: flex;
        align-items: flex-end;
    `;

const ContenidoHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
const Titulo = styled.h1`
  color: #6bd1ff;
  font-size: 5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1035px) {
    font-size: 3rem;
  }
`;

const Subtitulo = styled.h2`
    max-width: 100%;
    color: #fff;
    font-size: 4rem;

    @media (max-width: 1035px) {
        font-size: 2.5rem;
    }
    `;

const Parrafo = styled.p`
    max-width: 100%;
    color: #fff;
    font-size: 1.8rem;

    @media (max-width: 1035px) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        display: none
    }
    `;


const Hero = () => {

    return (
        <HeroBg>

            <ContenidoHero>

                <ContenidoHeader>
                    <div>
                        {/* Nuevo título "Front End" */}
                        <Titulo>FRONT END</Titulo>

                        <Subtitulo>Challenge React</Subtitulo>

                        <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>

                    </div>

                    <a href="https://www.youtube.com/watch?v=ov7vA5HFe6w" target="blank" style={{ width: '100%' }}>
                        <img src={imagenHero} alt="Miniatura video" />
                    </a>

                </ContenidoHeader>

            </ContenidoHero>

        </HeroBg>
    )
}


export default Hero;