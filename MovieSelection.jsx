import React, { useState } from 'react';

function MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '', '', '', '']);
  const [topMoviePosters, setTopMoviePosters] = useState(['', '', '', '', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');

  const allMovies = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction', 'Inception', 'The Dark Knight', 'Titanic', 'Forrest Gump'];

  // Hardcoded movie posters for demonstration purposes
  const moviePosters = {
    'The Shawshank Redemption': 'https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY879_.jpg',
    'Inception': 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    'Untouchable': 'https://pics.filmaffinity.com/The_Intouchables-113587882-large.jpg',
    'WALL-E': 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg',
    'Flipped': 'https://m.media-amazon.com/images/M/MV5BMTU2NjQ1Nzc4MF5BMl5BanBnXkFtZTcwNTM0NDk1Mw@@._V1_.jpg',
    'The Dark Knight':'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    'Life of Pi':'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg',
    'The Pianist':'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
  };

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
      <h2>Select your top 8 movies</h2>
      <p>Selecting your top 8 movies will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginTop: '16px' }}>
        {topMovies.map((movie, index) => (
          <div key={index} style={{ position: 'relative' }}>
            {movie ? 
              <img src={topMoviePosters[index]} alt={movie} style={{ width: '100%' }} />
              : 
              <div style={{ width: '100px', height: '150px', border: '1px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Empty</div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSelection;
