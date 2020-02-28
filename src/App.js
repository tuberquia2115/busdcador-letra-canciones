import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario/Formulario';
import axios from 'axios';
import Cancion from './components/cancion/cancion';
import Artista from './components/Artista/Artista';
// import Spinner from './components/Spinner/Spinner';


function App() {
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [infoArtista, guardarInfoArtista] = useState({});
  // const [cargar, guardarCargar] = useState(false)

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2),
      ])
      guardarLetra(letra.data.lyrics);
      guardarInfoArtista(informacion.data.artists[0]);
    }
    consultarApiLetra();
  }, [busquedaLetra, infoArtista])
  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col md-6">
            <Artista info={infoArtista} />
          </div>
          <div className="col md-6">
            <Cancion letra={letra} />
          </div>

        </div>
      </div>

    </Fragment>
  );
}

export default App;
