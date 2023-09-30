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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx', // Breaking Bad
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiZkkqD5_-940YCD6EdEdU1dQKVvg2EuxsGkPL8TKseunhdNsh', // Band of Brothers
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6PHq5OU29Q6UE8DoH6eU1Aj47zBgy_YcrZ8MOUfhJhpYHWTO', // Chernobyl
    'https://collider.com/wp-content/uploads/the-wire-season-5-poster.jpg', // The Wire
    'https://m.media-amazon.com/images/M/MV5BNmU3MjkzZWQtOTk1Ni00OTNiLWJhMmMtNmEyN2JjZjUzZDUyXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_.jpg', // The Sopranos
    'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg', // Game of Thrones
    'https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg', // Sherlock
    'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg', // The Office
    'https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg', // The Last Dance
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0ZlBWHVfpRi2iWRCh_t2f6viHwyKMAfJB3paBHmsL78_b06T',
    'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg', // Rick and Morty
    'https://m.media-amazon.com/images/M/MV5BMTgwMzQzNTQ3OF5BMl5BanBnXkFtZTcwNzUxMzIyMw@@._V1_.jpg', // Planet Earth
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6pAadmdlzMN4hW5lHZZfh7dFT4PxwsNDldCec8uZo_yP9va5F',
    'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg', // Euphoria
    'https://m.media-amazon.com/images/M/MV5BODY5YjA3ZDgtM2EwYy00ZGVmLWFhNWItMTMxMWRkMWFiOTlkXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX190_CR0,2,190,281_.jpg', // Succession
    'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg'
];

  const handleTvClick = (movieIndex) => {
    if (selectedTv.length < 5 && !selectedTv.includes(movieIndex)) {
      setSelectedTv([...selectedTv, movieIndex]);
    }
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>

    <div style={{ width: '100%', marginTop: '50px', padding: '20px', backgroundColor: '#2D2D2E', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '16px', height: '230px' }}>
          <p>Your top 5 selections</p>
            <div style={{ display: 'flex', gap: '10px', height: '150px', marginLeft: '10%', marginRight: '10%'}}>
                {Array(5).fill(null).map((_, index) => {
                    const posterUrl = selectedTv[index] !== undefined ? tvPosters[selectedTv[index]] : null;
                    return (
                        <div 
                          key={index} 
                          style={{ 
                              flex: 1, 
                               height: '100%', 
                               backgroundSize: 'contain',
                               backgroundPosition: 'center', 
                               backgroundImage: posterUrl ? `url(${posterUrl})` : 'none',
                               backgroundRepeat: 'no-repeat',
                               border: posterUrl ? 'none' : '2px dashed white',
                               boxSizing: 'border-box'
                              }}
                       >
                       </div>
                   );
                })}
            </div>
      </div>

      <div className="page-width-medium">        
          <h2 style={{marginTop:'30px', marginBottom: '10px', fontSize: '35px'}}>Select your top 5 TV shows</h2>
          <p style={{marginBottom: '10px', fontWeight: 'normal', fontSize: '15px'}}>Selecting your top 5 TV-shows will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

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
    </div>
  );
}

export default TvSelection;
