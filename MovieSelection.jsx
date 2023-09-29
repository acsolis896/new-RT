import React, { useState } from 'react';

function MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '', '', '', '']);
  const [topMoviePosters, setTopMoviePosters] = useState(['', '', '', '', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');

  const allMovies = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction', 'Inception', 'The Dark Knight', 'Titanic', 'Forrest Gump'];

  // Hardcoded movie posters for demonstration purposes
  const moviePosters = [
    'https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY879_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    'https://pics.filmaffinity.com/The_Intouchables-113587882-large.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTU2NjQ1Nzc4MF5BMl5BanBnXkFtZTcwNTM0NDk1Mw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
];

  const addMovieToList = (movie) => {
    const firstEmptyIndex = topMovies.indexOf('');
    if (firstEmptyIndex !== -1) {
      const newMovies = [...topMovies];
      const newMoviePosters = [...topMoviePosters];
      newMovies[firstEmptyIndex] = movie;
      newMoviePosters[firstEmptyIndex] = moviePosters[movie];
      setTopMovies(newMovies);
      setTopMoviePosters(newMoviePosters);
      setSearchQuery('');
    }
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <h2 style={{marginTop:'30px', marginBottom: '10px'}}>Select your top 5 movies</h2>
      <p style={{marginBottom: '10px'}}>Selecting your top 5 movies will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

      <div className="search-bar-div" style={{marginBottom: '20px'}}>
        <i class="fa-solid fa-magnifying-glass" style={{paddingLeft: '10px'}}></i>
        <input
          className="movie-search-bar"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginTop: '16px' }}>
        {moviePosters.map((poster, index) => (
          <div key={index}>
            <img src={poster} alt={`Movie ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MovieSelection;
