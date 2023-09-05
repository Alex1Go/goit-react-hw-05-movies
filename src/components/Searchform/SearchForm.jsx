export const SearhForm = ({ onSubmit }) => {
  //   const handleSubmit = value => {
  //     setSearchParams({ query: value });
  //   };

  return (
    <form
    //   onSubmit={handleSubmit}
    >
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        // query={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};
