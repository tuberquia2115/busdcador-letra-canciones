import React from 'react';
import PropTypes from 'prop-types'

const Artista = ({ info }) => {
    if (Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES, strTwitter, strLastFMChart, strWebsite, strFacebook } = info
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight.bold">
                Información artista
            </div>
            <div className="card-body">
                <img
                    src={strArtistThumb}
                    alt="logo artista"
                />
                <p className="card-text">Genero: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a
                        href={`https://${strTwitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href={`https://${strFacebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href={`https://${strLastFMChart}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-lastfm"></i>
                    </a>
                    <a
                        href={`https://${strWebsite}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ion-icon style={{ fontSize: '32px' }} name="person-circle-sharp"></ion-icon>
                    </a>


                </p>

            </div>

        </div>
    )
}
Artista.propTypes = {
    info: PropTypes.object
}
export default Artista;

