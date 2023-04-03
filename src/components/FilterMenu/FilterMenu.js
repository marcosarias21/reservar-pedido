import { useContext } from 'react';
import menuContext from '../../provider/MenuContext';

const FilterMenu = ({ menuData }) => {
  const { setFilteredMenu } = useContext(menuContext);

  const handleChange = (e) => {
    const menuFilteredByType = menuData.filter(menu => menu.type === e.target.value);
    if (menuFilteredByType.length === 0) {
      setFilteredMenu(menuData);
    } else {
      setFilteredMenu(menuFilteredByType);
    }
  };
  return (
      <select className="form-select w-100 mb-4" aria-label="Default select example" onChange={handleChange}>
        <option selected hidden>Filter Menu:</option>
        <option value="">Todos</option>
        <option value="carnes">Carnes</option>
        <option value="pastas">Pastas</option>
        <option value="vegano">P/Veganos</option>
      </select>
  );
};

export default FilterMenu;
