import { useContext } from 'react';
import menuContext from '../../provider/MenuContext';

const FilterMenu = () => {
  const { setMenuData } = useContext(menuContext);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
      <option selected hidden>Filter Menu:</option>
      <option value="Carnes">Carnes</option>
      <option value="Pastas">Pastas</option>
      <option value="Vegano">P/Veganos</option>
    </select>
  );
};

export default FilterMenu;
