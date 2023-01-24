import { useSearchHandleContext } from '../../provider/SearchContext';

const SearchBar = () => {
  const setSearchUser = useSearchHandleContext();
  const handleChange = (e) => {
    setSearchUser(e.target.value);
  };
  return (
    <div className="container">
      <form className="d-flex my-4" role="search">
        <input className="form-control me-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
