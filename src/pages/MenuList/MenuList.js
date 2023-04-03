import { useContext, useEffect } from 'react';
import { Carousel } from '../../components/Carousel';
import { FilterMenu } from '../../components/FilterMenu';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import menuContext from '../../provider/MenuContext';
import './menulist.scss';

const MenuList = () => {
  const { setMenuData, menuData, filteredMenu } = useContext(menuContext);
  const user = JSON.parse(localStorage.getItem('User'));
  if (!user?.token) window.location.href = '/login';

  const getDataMenu = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    const menuFiltered = json?.menu.filter(menu => user.user.empresa === menu.empresa || menu.empresa === 'Ambas');
    setMenuData(menuFiltered);
  };

  useEffect(() => {
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
        <div className='container d-flex'>
          <div className='w-25'>
            <FilterMenu menuData={menuData} />
          </div>
          <div className='row ms-5'>
            {
              filteredMenu?.map(menu => <Menus key={menu.id} {...menu} />)
            }
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MenuList;
