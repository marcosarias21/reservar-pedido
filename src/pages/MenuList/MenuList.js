import { useContext, useEffect } from 'react';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import menuContext from '../../provider/MenuContext';

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
    <Nabvar user={user?.user} />
    <section className='row justify-content-center'>
      {
        menuData?.map(menu => <Menus key={menu.id} {...menu} />)
      }
    </section>
    </>
  );
};

export default MenuList;
