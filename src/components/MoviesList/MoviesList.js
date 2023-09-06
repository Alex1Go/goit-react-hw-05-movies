export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li></li>
      ))}
    </ul>
  );
};
