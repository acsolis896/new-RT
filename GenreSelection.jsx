import React, { useState } from 'react';


const ALL_GENRES = [
    'Action 🔫', 'Adventure 🪂', 'Animation 🖍️', 'Biography 📚', 'Comedy 😂', 
    'Crime 🕵️‍♂️', 'Documentary 🎥 ', 'Drama 🎭', 'Family 👪', 'Fantasy 🦄', 
    'History 📜', 'Horror 🧟', 'Mystery 🔎', 'Reality-TV 🌎', 'Romance ❤️',
    'Sci-Fi 👽', 'Sport 🏈', 'Thriller 😱', 'War ⚔️', 'Western 🤠', 'Adult 🔞',
    'Film-Noir 🎞️', 'Game-Show 🎲', 'Music 🎧', 'Musical 🎶', 'News 📰', 
    'Talk-Show 🗣', 'Short ⏳'
];

function GenreSelection({ selectedGenres, setSelectedGenres }) {
    const [showMore, setShowMore] = useState(false);

    const handleGenreChange = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(prev => prev.filter(g => g !== genre));
        } else if (selectedGenres.length < 3) {
            setSelectedGenres(prev => [...prev, genre]);
        } else {
            alert('You can only select up to 3 genres.');
        }
    };

    const displayedGenres = showMore ? ALL_GENRES : ALL_GENRES.slice(0, 20);

  // Integrate Firebase to save the selected genres

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Select your top 3 genres for movies and TV</h2>
      <div className="genres-grid">
            {displayedGenres.map(genre => (
                <div className={`genre-div ${selectedGenres.includes(genre) ? 'selected' : ''}`}>
                 <label key={genre} className="genre-label">
                    <span className="genre-name">{genre}</span>
                    <input 
                        type="checkbox" 
                        value={genre} 
                        checked={selectedGenres.includes(genre)} 
                        onChange={() => handleGenreChange(genre)}
                    />
                </label>
                </div>
            ))}
     </div>
            <button className="show-btn" onClick={() => setShowMore(!showMore)}>
                {showMore ? <>Show Less <i class="fa-solid fa-chevron-up"></i></> : <>Show More <i className="fa-solid fa-chevron-down"></i></>}
            </button>
    </div>
  );
}

export default GenreSelection;