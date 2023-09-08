// import { getMovieReviews } from 'api';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export const Reviews = () => {
//   const { movieId } = useParams();
//   const [reviewsData, setreviewsData] = useState(null);
//   useEffect(() => {
//     if (!movieId) return;
//     const fetchMovieReviews = async () => {
//       try {
//         const data = await getMovieReviews(movieId);
//         setreviewsData(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchMovieReviews();
//   }, [movieId]);
//   if (!reviewsData) return;

//   return <></>;
// };
