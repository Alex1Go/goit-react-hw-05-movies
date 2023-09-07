import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
