import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const SearchBar = () => {
  const { search, setSearch, handleSearch, activeLink } = useContext(
    MovieContext
  );

  return (
    <form onSubmit={handleSearch}>
      <div className="form-row mb-3 mt-3">
        <div className="col-12">
          {activeLink !== "Popular" && (
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Search a movies..."
            />
          )}
          
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
