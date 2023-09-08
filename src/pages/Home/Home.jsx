import css from './Home.module.css';

import { getTrendingFilms } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms('').then(setMovies);
  }, []);

  return (
    <div className={css.list}>
      <h2 className={css.title}>Top Movies Today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
