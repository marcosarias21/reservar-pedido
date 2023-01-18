import { useContext, useEffect } from 'react';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import userContext from '../../provider/UserContext';

const Home = () => {
  const { dataUser, setMenuData, menuData } = useContext(userContext);
  if (!dataUser?.token) window.location.href = '/login';
  const getDataMenu = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    if (json.menu.empresa === 'Ambos') {
      setMenuData(json.menu);
    } else {
      const menuFiltered = json?.menu.filter(menu => menu.empresa === dataUser.user.empresa);
      setMenuData(menuFiltered);
    }
  };

  useEffect(() => {
    getDataMenu();
  }, []);

  return (
    <>
    <Nabvar dataUser={dataUser?.user} />
    <section className='row'>
      {
        menuData?.map(menu => <Menus key={menu.id} {...menu} />)
      }
    </section>
    </>
  );
};

export default Home;
