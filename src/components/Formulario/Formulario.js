import React, { useState } from 'react';
import PropTypes from 'prop-types';
import developer from '../../assets/Desarrollador.jpeg'

const Formulario = ({ guardarBusquedaLetra }) => {
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const [error, guardarError] = useState('');

    const { artista, cancion } = busqueda;

    const updateState = e => {
        guardarBusqueda({
            ...busqueda, [e.target.name]: e.target.value
        })
    }

    const buscarInformacion = e => {
        e.preventDefault();

        // validar campos
        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //pasar la información al componente principal
        guardarBusquedaLetra(busqueda);

    }


    return (
        <div className="bg-info">
            <div className="p-3 p" >
                <strong style={{ color: 'white' }}>DEVELOPER</strong>
                <a
                    href={"https://github.com/tuberquia2115?tab=repositories"}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i style={{ fontSize: '20px', paddingLeft: '1rem', color: '#000' }} className="fab fa-github"> github</i>
                </a>
                <img style={{ borderRadius: '50px', border: 'solid 2px white' }} height="60" width="60" src={developer} className="float-right" alt="developer" />
            </div>
            <div>
                {error ? <p className="alert alert-danger text-center p-2" >Todos los campos son obligatorios</p> : null}

                <div className="container">
                    <div className="row">
                        <form
                            onSubmit={buscarInformacion}
                            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        >
                            <fieldset>
                                <legend className="text-center"> Buscador letras canciones</legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Artista</label>
                                            <input
                                                value={artista}
                                                onChange={updateState}
                                                type="text"
                                                className="form-control"
                                                name="artista"
                                                placeholder="Nombre Artista"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Canción</label>
                                            <input
                                                value={cancion}
                                                onChange={updateState}
                                                type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre Canción"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <button
                                    className="btn btn-primary float-right"
                                    type="submit">Buscar</button>
                            </fieldset>
                        </form>

                    </div>

                </div>

            </div >
        </div>
    )
}

Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired
}
export default Formulario;