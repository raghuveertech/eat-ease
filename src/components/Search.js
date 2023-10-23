import "./../scss/search.scss";

const Search = (props) => {
  const { searchQuery, searchQueryHandler, filterRestaurants, clearSearch } =
    props;
  return (
    <div className="search">
      <div className="input-wrap">
        <input
          name="search"
          type={"text"}
          placeholder="Search for a Restaurant"
          onChange={searchQueryHandler}
          value={searchQuery}
        />
        {searchQuery && (
          <span className="clear-search" onClick={clearSearch}>
            &times;
          </span>
        )}
      </div>
      <button onClick={filterRestaurants}>Search</button>
    </div>
  );
};

export default Search;
