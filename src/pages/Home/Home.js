import { useContext, useEffect, useState } from 'react';
import { Menus } from '../../components/Menus';
import userContext from '../../provider/UserContext';

const Home = () => {
  const { dataUser } = useContext(userContext);
  console.log(dataUser.user.empresa);
  const [menuData, setMenuData] = useState([]);
  console.log(menuData);
  const getDataMenu = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    console.log(json);
    const menuFiltered = json?.menu.filter(menu => menu.empresa === dataUser.user.empresa);
    setMenuData(menuFiltered);
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
