import React, { useState } from 'react';

function GenreSelection() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Integrate Firebase to save the selected genres

  return (
    <div>
      <h2>Genre Selection</h2>
      <label>
        <input
          type="checkbox"
          value="Action"
          checked={selectedGenres.includes('Action')}
          onChange={() => toggleGenre('Action')}
        />
        Action
      </label>
      <label>
        <input
          type="checkbox"
          value="Comedy"
          checked={selectedGenres.includes('Comedy')}
          onChange={() => toggleGenre('Comedy')}
        />
        Comedy
      </label>
      {/* Add more genre options */}
    </div>
  );
}

export default GenreSelection;