import { getMovieDetails } from 'api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  if (!movieData) return;
  return (
    <>
      <Link to={backLink}>Go back</Link>
      <div>
        <img
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div>
          <h2>{movieData.title}</h2>
          <p>Rating: {movieData.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieData.genres &&
              movieData.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
