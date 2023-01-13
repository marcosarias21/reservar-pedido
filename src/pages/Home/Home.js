import { useContext, useEffect, useState } from 'react';
import { Menus } from '../../components/Menus';
import userContext from '../../provider/UserContext';

const Home = () => {
  const { dataUser } = useContext(userContext);
  const [menuData, setMenuData] = useState([]);
  const getDataMenu = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    setMenuData(json.menu);
  };

  useEffect(() => {
    getDataMenu();
  }, []);

  return (
    <section className='row'>
      {
        menuData?.map(menu => <Menus key={menu.id} {...menu}/>)
      }
    </section>
  );
};

export default Home;
