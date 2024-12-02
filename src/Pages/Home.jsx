import Hero from "../Components/Hero";
import Categoria from "../Components/Categoria/Categoria";

const Home = ({ categorias, videos, eliminarVideo }) => {

  return <>

    <Hero />

    {categorias.map(categoria => {

      return <Categoria
        datos={categoria}
        key={categoria.titulo}
        videos={videos.filter(video => video.categoria === categoria.titulo)}
        eliminarVideo = {eliminarVideo}
      />
    })}

  </>
}


export default Home;