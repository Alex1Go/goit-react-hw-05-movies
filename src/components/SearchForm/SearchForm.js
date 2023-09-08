import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    setSearchParams({ query });
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};
