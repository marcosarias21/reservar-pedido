import { useEffect } from 'react';

const useSearchMenu = (searchMenu, setFilteredMenu, setSearchMenu, menuData) => {
  const getSearchedMenu = async () => {
    const resp = await fetch(`http://localhost:8000/menu/${searchMenu}`);
    const json = await resp.json();
    setFilteredMenu(json.menuFounded);
    if (json.menuFounded?.length === undefined) return setFilteredMenu(menuData);
  };

  const handleSearchMenu = (e) => {
    setSearchMenu(e.target.value);
  };

  useEffect(() => {
    getSearchedMenu();
  }, [searchMenu]);

  return { handleSearchMenu };
};

export default useSearchMenu;
