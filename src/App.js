import './App.css';
import './Normalize.css';
import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import PieDePagina from './Components/Footer/Footer';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NuevoVideo from './Formularios/FormVideo/NuevoVideo';
import NuevaCategoria from './Formularios/FormCategoria/NuevaCategoria';
import Home from './Pages/Home';
import Error from './Pages/404';



function App() {

  const getCategorias = JSON.parse(localStorage.getItem('Categorias'));
  const getVideos = JSON.parse(localStorage.getItem('Videos'));

  const [categorias, setCategorias] = useState(getCategorias || [
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#6BD1FF",
      descripcion: "Formación Front End de Alura Latam"
    },
    {
      id: uuid(),
      titulo: "Back End",
      colorPrimario: "#00C86F",
      descripcion: "Formación Back End de Alura Latam"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8C2A",
      descripcion: "Formación Innovación y Gestión de Alura Latam"
    }
  ]);




  const [videos, setVideos] = useState(getVideos || [
    {
      id: uuid(),
      categoria: 'Front End',
      link: 'https://www.youtube.com/watch?v=-LmFK6skG7s',
      imagen: 'https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Front End',
      link: 'https://www.youtube.com/watch?v=GJfOSoaXk4s&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/GJfOSoaXk4s/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Front End',
      link: 'https://www.youtube.com/watch?v=rpvrLaBQwgg&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Front End',
      link: 'https://www.youtube.com/watch?v=-Ou5c3A225k&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/-Ou5c3A225k/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      link: 'https://www.youtube.com/watch?v=t-iqt1b2qqk&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      link: 'https://www.youtube.com/watch?v=cLLKVd5CNLc&t=639s&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      link: 'https://www.youtube.com/watch?v=EoPvlE85XAQ&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=vhwspfvI52k&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=_-9grhDhxiU&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/_-9grhDhxiU/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=6N3OkLCfK-0&t=3s&ab_channel=AluraLatam',
      imagen: 'https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg'
    },
  ]);



  //*useEffect para localStorage
  useEffect(() => {
    localStorage.setItem('Videos', JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem('Categorias', JSON.stringify(categorias));
  }, [categorias]);


  const guardarVideo = (nuevoVideo) => {

    setVideos([...videos, { ...nuevoVideo, id: uuid() }]);
  }

  function guardarCategoria(nuevaCategoria) {

    setCategorias([...categorias, { ...nuevaCategoria, id: uuid() }]);
  }

  function eliminarCategoria(id) {

    const resultado = window.confirm('¿Deseas eliminar esta categoría y los videos en ella?');

    if (resultado) {
      const nuevoCategorias = categorias.filter((categoria) => categoria.id !== id)

     return setCategorias(nuevoCategorias)
    }
  }


  function eliminarVideo(id) {

    const confirmar = window.confirm('¿Deseas eliminar este video?');

    if (confirmar) {
      const videoEliminado = videos.filter((video) => video.id !== id);
      return setVideos(videoEliminado);
    } else {
      return;
    }
  }

  return (

    <Router>

      <Header />

      <Routes>

        <Route
          path='/'
          element={<Home
            categorias={categorias}
            videos={videos}
            eliminarVideo={eliminarVideo}
          />}
        />

        <Route
          path='/video'
          element={<NuevoVideo
            guardarVideo={guardarVideo}
            categorias={categorias} />}
        />

        <Route
          path='/categoria'
          element={<NuevaCategoria
            guardarCategoria={guardarCategoria}
            categorias={categorias}
            eliminarCategoria={eliminarCategoria} />}
        />

        <Route path='*' element={<Error />} />

      </Routes>

      <PieDePagina />

    </Router>

  );
}

export default App;
