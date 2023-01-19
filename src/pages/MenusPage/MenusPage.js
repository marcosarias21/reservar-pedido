import { useEffect, useRef, useState } from 'react';
import { MenusAdmin } from '../../components/MenusAdmin';
import { Nabvar } from '../../components/Navbar';
import './menuspage.scss';

const MenusPage = () => {
  const user = JSON.parse(localStorage.getItem('User'));
  const tableRef = useRef();
  const [allMenu, setAllMenu] = useState([]);
  const getAllMenus = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    setAllMenu(json.menu);
  };

  useEffect(() => {
    getAllMenus();
  }, []);

  return (
    <>
    <Nabvar user={user.user} />
    <table className='table' ref={tableRef}>
        <thead>
        <tr>
              <th className='fw-bold ps-3 py-3'>ID</th>
              <th className='fw-bold ps-3 py-3'>Menu</th>
              <th className='fw-bold ps-3 py-3'>Empresa</th>
              <th></th>
            </tr>
        </thead>

      {
        allMenu?.map(menu => <MenusAdmin key={menu.id} {...menu} tableRef={tableRef} />)
      }
    </table>
    </>
  );
};

export default MenusPage;
