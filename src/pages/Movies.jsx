import { getSearchFilms } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    const fetchMoviesSearch = async () => {
      try {
        const data = await getSearchFilms(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesSearch();
  }, [query]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
