import React, { useState } from 'react';

function TvSelection() {
  const [topTv, setTopTv] = useState(['', '', '', '', '', '', '', '']);
  const [topTvPosters, setTopTvPosters] = useState(['', '', '', '', '', '', '', '']);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [selectedTv, setSelectedTv] = useState([]);

  const allTvShows = ['Breaking Bad', 'Band of Brothers', 'Chernobyl', 'The Wire', 'The Sopranos', 'Game of Thrones', 'Sherlock', 'The Office', 'The Last Dance', 'Severance', 'Rick and Morty', 'Planet Earth', 'The White Lotus', 'Euphoria', 'Succession', 'The Last of Us'];

  // Hardcoded movie posters for demonstration purposes
  const tvPosters = [
    'https://m.media-amazon.com/images/M/MV5BMTFlNTQ3MDMyOV5BMl5BanBnXkFtZTgwODk4MzI2MzE@._V1_.jpg', // Breaking Bad
    'https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtZjczZS00YmFkLTg4NWQtOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg', // Band of Brothers
    'https://m.media-amazon.com/images/M/MV5BZGZjNWE4ZmItZDNlZC00YTllLWE1ZmYtZmE4ZTM1MjY0NzgyXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg', // Chernobyl
    'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMzkzMTg3OA@@._V1_.jpg', // The Wire
    'https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTYwNzUwMzI3._V1_.jpg', // The Sopranos
    'https://m.media-amazon.com/images/M/MV5BMjA0ODczMTM2Nl5BMl5BanBnXkFtZTgwODg1MTUwMzI@._V1_.jpg', // Game of Thrones
    'https://m.media-amazon.com/images/M/MV5BMTY2Njk3MDQ3MV5BMl5BanBnXkFtZTgwMjEzMzgyMjE@._V1_.jpg', // Sherlock
    'https://m.media-amazon.com/images/M/MV5BMTk2Nzk3MzU4M15BMl5BanBnXkFtZTcwODg0OTY3Mw@@._V1_.jpg', // The Office
    'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0Mi00OTg0LWE2ZjItZTg0ZmU4MmU1NTQ1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg', // The Last Dance
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0ZlBWHVfpRi2iWRCh_t2f6viHwyKMAfJB3paBHmsL78_b06T',
    'https://m.media-amazon.com/images/M/MV5BNjQ2NDAxNjg4N15BMl5BanBnXkFtZTgwNzYxNzQ0MjI@._V1_.jpg', // Rick and Morty
    'https://m.media-amazon.com/images/M/MV5BMTgwMzQzNTQ3OF5BMl5BanBnXkFtZTcwNzUxMzIyMw@@._V1_.jpg', // Planet Earth
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6pAadmdlzMN4hW5lHZZfh7dFT4PxwsNDldCec8uZo_yP9va5F',
    'https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktZjZjMi00NmE1LThjNzktZTJjZjZiNzY3ODE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg', // Euphoria
    'https://m.media-amazon.com/images/M/MV5BYjZjODRlYTQtYjAzYS00ZjBlLWIxYzUtMGE3M2M0Zjc5MjVkXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg', // Succession
    'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg'
];

  const handleTvClick = (movieIndex) => {
    if (selectedTv.length < 5 && !selectedTv.includes(movieIndex)) {
      setSelectedTv([...selectedMovies, movieIndex]);
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
      {tvPosters.slice(0, showMore ? tvPosters.length : 8).map((poster, index) => {
          const isSelected = selectedTv.includes(index);
          return (
            <div 
              key={index} 
              onClick={() => handleTvClick(index)}
              style={{
                border: isSelected ? '2px solid orange' : 'none',
                position: 'relative',
              }}
            >
              <img src={poster} alt={`Tv ${index + 1}`} style={{ width: '100%' }} />
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

export default TvSelection;
