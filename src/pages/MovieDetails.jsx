// import { getMovieDetails } from 'api';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const { movieData, setMovieData } = useState();
//   const defaultImg =
//     'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

//   useEffect(() => {
//     if (!movieId) return;
//     const fetchMovieDetails = async () => {
//       try {
//         const data = await getMovieDetails(movieId);
//         setMovieData(data.results);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchMovieDetails();
//   }, [movieId]);

//   return (
//     <div>
//       <img
//         src={
//           movieData.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
//             : defaultImg
//         }
//         width={250}
//         alt="poster"
//       />
//       <div>
//         <p>{movieData.title}</p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <ul>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default MovieDetails;
