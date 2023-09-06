import { getTrendingFilms } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms('').then(setMovies);
  }, []);

  return (
    <div>
      <h2>Top Movies Today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
