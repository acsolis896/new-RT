import React, { useState, useRef } from 'react';

function MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null); // Reference to the search input

  const allMovies = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction', 'Inception', 'The Dark Knight', 'Titanic', 'Forrest Gump'];

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

  const removeMovieFromList = (index) => {
    const newMovies = [...topMovies];
    newMovies[index] = '';
    setTopMovies(newMovies);
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <h2>Select your top 8 movies</h2>
      <p>Selecting your top 8 movies will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {suggestions.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          border: '1px solid gray',
          zIndex: 1,
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)'
        }}>
          {suggestions.map((suggestion, index) => (
            <div key={index} onClick={() => addMovieToList(suggestion)} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>
              {suggestion}
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginTop: '16px' }}>
        {topMovies.map((movie, index) => (
          <div key={index} style={{ position: 'relative' }}>
            {movie ? 
              <>
                <img src="https://via.placeholder.com/100x150" alt={movie} style={{ width: '100%' }} />
                <button onClick={() => removeMovieFromList(index)} style={{ position: 'absolute', right: 0, top: 0, background: 'red', color: 'white' }}>X</button>
              </> : 
              <div style={{ width: '100px', height: '150px', border: '1px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Empty</div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSelection;
