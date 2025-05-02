import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie__card">
            <h3 className="movie__title">{movie.title}</h3>
            <p className="movie__genre">{movie.genre}</p>
            <p className="movie__overview">{movie.overview}</p>
            <p className="movie__rating">Rating: {movie.rating}</p>
            <a className="movie__link" href={movie.trailerUrl} target="_blank" rel="noreferrer">Ver trailer</a>
            <p className="movie__platform">Disponible en: {movie.streamingPlatform}</p>
        </div>
    );
};

export default MovieCard;
