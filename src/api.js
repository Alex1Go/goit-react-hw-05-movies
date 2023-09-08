import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

export const getTrendingFilms = async () => {
  const responce = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return responce.data.results;
};

export const getSearchFilms = async query => {
  const responce = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return responce.data;
};

export const getMovieDetails = async movieId => {
  const responce = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return responce.data;
};

export const getMovieCast = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return responce.data;
};

export const getMovieReviews = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  console.log(responce.data);
  return responce.data;
};
