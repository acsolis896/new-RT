import React, { useState } from 'react';

const ALL_GENRES = [
    'Action 🔫', 'Adventure 🪂', 'Animation 🖍️', 'Biography 📚', 'Comedy 😂', 
    'Crime 🕵️‍♂️', 'Documentary 🎥 ', 'Drama 🎭', 'Family 👪', 'Fantasy 🦄', 
    'History 📜', 'Horror 🧟', 'Mystery 🔎', 'Reality-TV 🌎', 'Romance ❤️',
    'Sci-Fi 👽', 'Sport 🏈', 'Thriller 😱', 'War ⚔️', 'Western 🤠', 'Adult 🔞',
    'Film-Noir 🎞️', 'Game-Show 🎲', 'Music 🎧', 'Musical 🎶', 'News 📰', 
    'Talk-Show 🗣', 'Short ⏳'
];

function GenreSelectionPage() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const handleGenreChange = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(prev => prev.filter(g => g !== genre));
        } else if (selectedGenres.length < 3) {
            setSelectedGenres(prev => [...prev, genre]);
        }
    };

    const displayedGenres = showMore ? ALL_GENRES : ALL_GENRES.slice(0, 20);

  // Integrate Firebase to save the selected genres

  return (
    <div>
      <h2>Genre Selection</h2>
      <div className="genres-grid">
            {displayedGenres.map(genre => (
                 <label key={genre}>
                    <input 
                        type="checkbox" 
                        value={genre} 
                        checked={selectedGenres.includes(genre)} 
                        onChange={() => handleGenreChange(genre)}
                    />
                    {genre}
                </label>
            ))}
     </div>
            <button class="show-btn" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
    </div>
  );
}

export default GenreSelection;