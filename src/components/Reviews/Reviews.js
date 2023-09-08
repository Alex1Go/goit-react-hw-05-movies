import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setreviewsData] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setreviewsData(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  if (reviewsData.length === 0) {
    return <p>no reviews </p>;
  }

  return (
    <ul>
      {reviewsData.map(({ id, author, content }) => (
        <li key={id}>
          <h5>{`Author: ${author}`}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
