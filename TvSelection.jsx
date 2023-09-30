import React, { useState } from 'react';

function TvSelection() {
  const [topTv, setTopTv] = useState(['', '', '', '', '', '', '', '']);
  const [topTvPosters, setTopTvPosters] = useState(['', '', '', '', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMore, setShowMore] = useState(false);

  const allTvShows = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction', 'Inception', 'The Dark Knight', 'Titanic', 'Forrest Gump'];

  // Hardcoded movie posters for demonstration purposes
  const tvPosters = [
    'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UY281_CR7,0,190,281_.jpg',
    'https://collider.com/wp-content/uploads/the-wire-season-5-poster.jpg',
    'https://m.media-amazon.com/images/M/MV5BNmU3MjkzZWQtOTk1Ni00OTNiLWJhMmMtNmEyN2JjZjUzZDUyXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg'
];

  const addMovieToList = (tv) => {
    const firstEmptyIndex = topTv.indexOf('');
    if (firstEmptyIndex !== -1) {
      const newTv = [...topTv];
      const newTvPosters = [...topTvPosters];
      newTv[firstEmptyIndex] = tv;
      newTvPosters[firstEmptyIndex] = tvPosters[tv];
      setTopTv(newTv);
      setTopTvPosters(newTvPosters);
      setSearchQuery('');
    }
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <h2>Select your top 5 TV shows</h2>
      <p>Selecting your top 5 TV-shows will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

      <div className="search-bar-div">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          className="movie-search-bar"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginTop: '16px' }}>
          {tvPosters.slice(0, showMore ? tvPosters.length : 8).map((poster, index) => (
            <div key={index}>
              <img src={poster} alt={`TV ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
      </div>

      <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
      </button>

    </div>
  );
}

export default TvSelection;
