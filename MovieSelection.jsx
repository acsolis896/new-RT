import React, { useState } from 'react';
require('dotenv').config();
const API_KEY = process.env.API_KEY;

function MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Hardcoded movies for demonstration purposes
  const allMovies = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction', 'Inception', 'The Dark Knight', 'Titanic', 'Forrest Gump'];

  const handleMovieChange = (e, index) => {
    const newMovies = [...topMovies];
    newMovies[index] = e.target.value;
    setTopMovies(newMovies);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const searchResults = allMovies.filter(movie => movie.toLowerCase().includes(e.target.value.toLowerCase()));
    setSuggestions(searchResults);
  };

  const addMovieToList = (movie) => {
    const firstEmptyIndex = topMovies.indexOf('');
    if (firstEmptyIndex !== -1) {
      const newMovies = [...topMovies];
      newMovies[firstEmptyIndex] = movie;
      setTopMovies(newMovies);
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  // Integrate Firebase to save the top 5 movies

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Select your top 5 movies</h2>
      <p>Selecting your top 5 movies will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        {suggestions.map((suggestion, index) => (
          <div key={index} onClick={() => addMovieToList(suggestion)}>
            {suggestion}
          </div>
        ))}
      </div>

      {topMovies.map((movie, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Movie ${index + 1}`}
          value={movie}
          onChange={(e) => handleMovieChange(e, index)}
        />
      ))}
    </div>
  );
}

export default MovieSelection;


