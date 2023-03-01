import { useContext, useEffect } from 'react';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import menuContext from '../../provider/MenuContext';
import './menulist.scss';

const MenuList = () => {
  const { setMenuData, menuData } = useContext(menuContext);
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
    <Nabvar user={user?.user} className='border-bottom nav-shadow' />
    <section className='bg-light'>
      <div className='container pt-5'>
        {
          menuData?.map(menu => <Menus key={menu.id} {...menu} />)
        }
      </div>
    </section>
    </>
  );
};

export default MenuList;
