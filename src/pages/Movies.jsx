import { getSearchFilms } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      setMovies([]);
      return;
    }
    getSearchFilms(movieId).then(setMovies);
  }, [movieId]);

  return (
    <>
      <SearchForm />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
