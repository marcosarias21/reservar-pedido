import { useSearchHandleContext } from '../../provider/SearchContext';
import './searchbar.scss';

const SearchBar = () => {
  const setSearchUser = useSearchHandleContext();
  const handleChange = (e) => {
    setSearchUser(e.target.value);
  };
  return (
    <div className="container">
      <form className="d-flex my-4 justify-content-center" role="search">
        <input className="form-control searchbar me-2" type="search" onChange={handleChange} placeholder="Buscador de clientes" aria-label="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
