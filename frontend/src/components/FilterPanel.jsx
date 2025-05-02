import React, { useState } from "react";
import "./FilterPanel.css"

const FilterPanel = ({ onSearch }) => {
    const [genre, setGenre] = useState("");
    const [keyword, setKeyword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(genre, keyword);
    };

    return (
        <form className="filter__form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="filter__input"/>
            <input
                type="text"
                placeholder="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="filter__input"/>
            <button type="submit" className="filter__button">Search</button>
        </form>
        );
}

export default FilterPanel