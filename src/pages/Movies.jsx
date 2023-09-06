import { getSearchFilms } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearhForm } from 'components/Searchform/SearchForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    getSearchFilms('').then(setMovies);
  }, [movieId]);

  return (
    <>
      <SearhForm />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
