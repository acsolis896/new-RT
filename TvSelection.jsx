import React, { useState } from 'react';

function TvSelection() {
  const [topTv, setTopTv] = useState(['', '', '', '', '']);

  const handleTvChange = (e, index) => {
    const newMovies = [...topMovies];
    newMovies[index] = e.target.value;
    setTopTv(newMovies);
  };

  // Integrate Firebase to save the top 5 tv shows

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Select your top 5 TV shows</h2>
      <p>Selecting your top 5 TV-shows will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>
      {topTv.map((movie, index) => (
        <input
          key={index}
          type="text"
          placeholder={`TV Show ${index + 1}`}
          value={movie}
          onChange={(e) => handleTvChange(e, index)}
        />
      ))}
    </div>
  );
}

export default TvSelection;