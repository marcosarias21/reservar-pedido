import { useContext } from 'react';
import Select from 'react-select';
import menuContext from '../../provider/MenuContext';
import { optiosMenu } from '../../helpers/optionsMenu';

const FilterMenu = ({ menuData }) => {
  const { setFilteredMenu } = useContext(menuContext);

  const handleChange = (e) => {
    const menuFilteredByType = menuData.filter(menu => menu.type === e.value);
    if (menuFilteredByType.length === 0) {
      setFilteredMenu(menuData);
    } else {
      setFilteredMenu(menuFilteredByType);
    }
  };
  return (
    <Select placeholder='Filtrar por tipo de menu:' options={optiosMenu} value={optiosMenu.value} onChange={handleChange} />
  );
};

export default FilterMenu;
