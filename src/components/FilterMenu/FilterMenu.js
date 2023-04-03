import { useContext } from 'react';
import menuContext from '../../provider/MenuContext';
import './filtermenu.scss';

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
    <div className='select-box'>
      <select className="form-select w-100" aria-label="Default select example" onChange={handleChange}>
        <option selected hidden>Filter Menu:</option>
        <option value="">Todos</option>
        <option value="carnes">Carnes</option>
        <option value="pastas">Pastas</option>
        <option value="vegano">P/Veganos</option>
      </select>
    </div>
  );
};

export default FilterMenu;
