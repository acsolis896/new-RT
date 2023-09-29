import React, { useState } from 'react';
import 

function MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Fetch movie data from TMDb API
  const fetchMovies = async (query) => {
    if (!query) return;

    const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your API key
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();

    return data.results;
  };

  const handleSearchChange = async (e) => {
    setSearchQuery(e.target.value);
    const searchResults = await fetchMovies(e.target.value);
    setSuggestions(searchResults);
  };

  const addMovieToList = (movie) => {
    const firstEmptyIndex = topMovies.indexOf('');
    if (firstEmptyIndex !== -1) {
      const newMovies = [...topMovies];
      newMovies[firstEmptyIndex] = movie.title; // use the movie title from the API data
      setTopMovies(newMovies);
      setSearchQuery('');
      setSuggestions([]);
    }
  };

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
            {suggestion.title}  {/* Display the movie title */}
            {/* Optional: Display movie poster */}
            {/* <img src={`https://image.tmdb.org/t/p/w92${suggestion.poster_path}`} alt={suggestion.title} /> */}
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