// import { useState } from 'react';

export const SearhForm = ({ setSearchParams, query }) => {
  // const [query, setQuery] = useState();

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={setSearchParams}
      />
      <button type="submit">Search</button>
    </form>
  );
};
