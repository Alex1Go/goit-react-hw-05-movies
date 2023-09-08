import css from './MovieDetails.module.css';

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
      <Link to={backLink} className={css.back}>
        Go back
      </Link>
      <div className={css.movieblock}>
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
          <h2 className={css.title}>{movieData.title}</h2>
          <p className={css.text}>Rating: {movieData.vote_average}</p>
          <h3 className={css.titletwo}>Overview</h3>
          <p className={css.text}>{movieData.overview}</p>
          <h3 className={css.titletwo}>Genres</h3>
          <ul>
            {movieData.genres &&
              movieData.genres.map(genre => (
                <li key={genre.id} className={css.text}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={css.titletwo}>Additional information</h3>
        <ul>
          <li className={css.text}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.text}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
