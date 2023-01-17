import { useContext, useEffect, useState } from 'react';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import userContext from '../../provider/UserContext';

const Home = () => {
  const { dataUser } = useContext(userContext);
  if (!dataUser?.token) window.location.href = '/login';
  const [menuData, setMenuData] = useState([]);
  const getDataMenu = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    const menuFiltered = json?.menu.filter(menu => menu.empresa === dataUser.user.empresa);
    setMenuData(menuFiltered);
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
