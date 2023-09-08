import { getMovieDetails } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { movieData, setMovieData } = useState();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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

  return (
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
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default MovieDetails;
