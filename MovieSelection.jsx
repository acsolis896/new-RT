import React, { useState } from 'react';

function MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '']);

  const handleMovieChange = (e, index) => {
    const newMovies = [...topMovies];
    newMovies[index] = e.target.value;
    setTopMovies(newMovies);
  };

  // Integrate Firebase to save the top 5 movies

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Select your top 5 movies</h2>
      <p>Selecting your top 5 movies will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>
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