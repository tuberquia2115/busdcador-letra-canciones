import React from 'react';
import PropTypes from 'prop-types';
const Cancion = ({ letra }) => {
    if (letra.length === 0) return null;
    return (

        <React.Fragment>
            <h2>Letra canción</h2>
            <p className="letra">{letra}</p>
        </React.Fragment>
    )
}


Cancion.propTypes = {
    letra: PropTypes.string.isRequired
}
export default Cancion;