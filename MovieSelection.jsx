import React, { useState } from 'react';

function MovieSelection() {
  const [topMovies, setTopMovies] = useState(['', '', '', '', '', '', '', '']);
  const [topMoviePosters, setTopMoviePosters] = useState(['', '', '', '', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const allMovies = ['The Shawshank Redemption', 'Inception', 'The Intouchables', 'WALL-E', 'Flipped', 'The Dark Knight', 'Life of Pi', 'The Pianist', 'The Godfather', 'The Godfather Part II', '12 Angry Men', 'Schindlers List', 'Lord of the Rings', 'Pulp Fiction', 'Titanic', 'Forrest Gump'];

  // Hardcoded movie posters for demonstration purposes
  const moviePosters = [
    'https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY879_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    'https://pics.filmaffinity.com/The_Intouchables-113587882-large.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTU2NjQ1Nzc4MF5BMl5BanBnXkFtZTcwNTM0NDk1Mw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', // The Godfather
    'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', // The Godfather Part II
    'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg', // 12 Angry Men
    'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', // Schindler's List
    'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg', // Lord of the Rings: The Fellowship of the Ring
    'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', // Pulp Fiction
    'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png', // Titanic
    'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', // Forrest Gump
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

  const handleMovieClick = (movieIndex) => {
    if (selectedMovies.length < 5 && !selectedMovies.includes(movieIndex)) {
      setSelectedMovies([...selectedMovies, movieIndex]);
    }
  };

  return (
    <div className='.page-width-medium' style={{ textAlign: 'center', position: 'relative' }}>

      <div style={{ backgroundColor: 'gray', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        {Array(5).fill(null).map((_, index) => {
          const posterUrl = selectedMovies[index] !== undefined ? moviePosters[selectedMovies[index]] : null;
          return (
            <div key={index} style={{ flex: 1, height: '100px', backgroundSize: 'cover', backgroundImage: `url(${posterUrl})` }}>
            </div>
          );
        })}
      </div>

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
        {moviePosters.slice(0, showMore ? moviePosters.length : 8).map((poster, index) => {
          const isSelected = selectedMovies.includes(index);
          return (
            <div 
              key={index} 
              onClick={() => handleMovieClick(index)}
              style={{
                border: isSelected ? '2px solid orange' : 'none',
                position: 'relative',
              }}
            >
              <img src={poster} alt={`Movie ${index + 1}`} style={{ width: '100%' }} />
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  right: '5%',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'orange',
                }}>
                  <i style={{fontSize: '20px'}}class="fa-solid fa-circle-check"></i>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
      </button>

    </div>
  );
}

export default MovieSelection;
