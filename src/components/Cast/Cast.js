import { getMovieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCastData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieCast();
  }, [movieId]);
  if (castData.length === 0) {
    return;
  }

  return (
    <>
      <ul>
        {castData.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <h2>{name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};
