import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<div>Cast info</div>} />
          <Route
            path="/movies/:movieId/reviews"
            element={<div>Reviews info</div>}
          />
        </Route>
      </Routes>
    </div>
  );
};
