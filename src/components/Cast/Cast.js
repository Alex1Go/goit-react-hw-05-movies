import css from './Cast.module.css';

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
        setCastData(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  if (castData.length === 0) {
    return <p>no casts </p>;
  }

  return (
    <>
      <ul>
        {castData.map(({ id, character, name, profile_path }) => (
          <li key={id} className={css.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <h2 className={css.title}>{name}</h2>
            <p className={css.text}>{`Character: ${character}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
