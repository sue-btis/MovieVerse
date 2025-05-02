import React, { useState } from 'react';
import './Home.css';
import FilterPanel from '../components/FilterPanel';
import MovieCard from '../components/MovieCard';

const Home =  () => {
    const [movies, setMovies] = useState([]);

    const handleSearch = async (genre, keyword) => {
        const res = await fetch(`http://localhost:8080/api/recommendations?genre=${genre}&keyword=${keyword}`);
        const data = await res.json();
        setMovies(data);
    };

    return (
        <div className="home__wrapper">
            <FilterPanel onSearch={handleSearch} />
            <div className="home__grid">
                {movies.map((movie,i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home