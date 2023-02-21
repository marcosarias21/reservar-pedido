import { useContext, useEffect } from 'react';
import { Hero } from '../../components/Hero';
import { Menus } from '../../components/Menus';
import { Nabvar } from '../../components/Navbar';
import menuContext from '../../provider/MenuContext';
import './home.scss';

const Home = () => {
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
    <section className='hero'>
      <Hero />
    </section>
    <section className='row justify-content-center'>
      {
        menuData?.map(menu => <Menus key={menu.id} {...menu} />)
      }
    </section>
    </>
  );
};

export default Home;
