import { useContext, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Carousel } from '../../components/Carousel';
import { FilterMenu } from '../../components/FilterMenu';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import menuContext from '../../provider/MenuContext';
import './menulist.scss';
import { SearchBar } from '../../components/SearchBar';
import useSearchMenu from '../../hooks/useSearchMenu';

const MenuList = () => {
  const {
    setMenuData, menuData, filteredMenu, setFilteredMenu, setSearchMenu, searchMenu,
  } = useContext(menuContext);
  const user = JSON.parse(localStorage.getItem('User'));
  const { handleSearchMenu } = useSearchMenu(searchMenu, setFilteredMenu, setSearchMenu, menuData);

  const getDataMenu = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    const menuFiltered = json?.menu.filter(menu => user.user.empresa === menu.empresa || menu.empresa === 'Ambas');
    setMenuData(menuFiltered);
    setFilteredMenu(menuFiltered);
  };

  useEffect(() => {
    if (!user?.token) window.location.href = '/login';
    getDataMenu();
  }, []);

  return (
    <>
    <Nabvar user={user?.user} className='nav-opacity' />
    <section className='mt-5 pt-5 section-carousel'>
      <Carousel />
    </section>
    <section className='section-menu pt-5'>
      <div className='container-fluid'>
        <div className='row justify-content-center gx-0'>
          <span className='text-center text-success'>Nuestros Platos</span>
          <h3 className='text-center color fw-bold'>Platos Populares</h3>
        </div>
        <div className='row'>
          <div className='col-12 col-md-5 col-xl-3'>
            <div className='select-box my-4'>
              <h4 className='text-center fw-bold my-3'><AiOutlineSearch /> Busca tu menu</h4>
              <SearchBar handleChange={handleSearchMenu} placeholder='Buscar plato...' />
              <FilterMenu menuData={menuData} />
            </div>
          </div>
          <div className='col-10 col-sm-12 col-md-7 col-xl-8'>
            <div className='row ms-5 gap-1'>
              {
                filteredMenu?.map(menu => <Menus key={menu.id} {...menu} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MenuList;
