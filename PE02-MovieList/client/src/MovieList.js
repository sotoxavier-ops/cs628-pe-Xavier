import React, { useState } from 'react';

function MovieList() {
  const movies = [
    {
      title: 'Inception',
      genre: 'Science Fiction',
      releaseYear: 2010
    },
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      releaseYear: 1994
    },
    {
      title: 'The Dark Knight',
      genre: 'Action',
      releaseYear: 2008
    }
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(title);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>

      <select value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="movies">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;