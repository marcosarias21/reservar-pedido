import './searchbar.scss';

const SearchBar = ({ handleChange, placeholder }) => {
  return (
      <form className="d-flex my-4 justify-content-center" role="search">
        <input className="form-control searchbar me-2" type="search" onChange={handleChange} placeholder={placeholder} aria-label="Search" />
      </form>
  );
};

export default SearchBar;
