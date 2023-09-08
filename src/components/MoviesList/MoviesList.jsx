import { Link, useLocation } from 'react-router-dom';
import css from './MoviessList.module.css';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
