import { useContext, useEffect } from 'react';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import menuContext from '../../provider/MenuContext';

const Home = () => {
  const { setMenuData, menuData } = useContext(menuContext);
  const user = JSON.parse(localStorage.getItem('User'));
  if (!user?.token) window.location.href = '/login';
  const getDataMenu = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    if (json.menu.empresa === 'Ambos') {
      setMenuData(json.menu);
    } else {
      const menuFiltered = json?.menu.filter(menu => menu.empresa === user.user.empresa);
      setMenuData(menuFiltered);
    }
  };

  useEffect(() => {
    getDataMenu();
  }, []);

  return (
    <>
    <Nabvar user={user?.user} />
    <section className='row'>
      {
        menuData?.map(menu => <Menus key={menu.id} {...menu} />)
      }
    </section>
    </>
  );
};

export default Home;
