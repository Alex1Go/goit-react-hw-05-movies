export const SearchForm = ({ setSearchParams, query }) => {
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
