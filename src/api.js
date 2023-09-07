import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

export const getTrendingFilms = async () => {
  const responce = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return responce;
};

export const getSearchFilms = async () => {
  const responce = await axios.get(`search/movie?api_key=${API_KEY}`);
  return responce;
};

export const getMovieDetails = async () => {
  const responce = await axios.get(`movie/movie_id?api_key=${API_KEY}`);
  return responce;
};
