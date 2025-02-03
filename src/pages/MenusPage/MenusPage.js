import { useEffect, useRef, useState } from 'react';
import { MenusAdmin } from '../../components/MenusAdmin';
import { ModalForm } from '../../components/ModalForm';
import { Nabvar } from '../../components/Navbar';
import './menuspage.scss';

const MenusPage = () => {
  const { user } = JSON.parse(localStorage.getItem('User'));
  console.log(user);
  const tableRef = useRef();
  const [allMenu, setAllMenu] = useState([]);
  console.log(allMenu);

  const getAllMenus = async () => {
    const resp = await fetch('http://localhost:8000/menu');
    const json = await resp.json();
    setAllMenu(json.menu);
  };

  useEffect(() => {
    if (user.rol !== 'Admin') window.location.href = '/home';
    getAllMenus();
  }, [allMenu.length]);

  return (
    <>
    <Nabvar user={user} />
    <table className='table' ref={tableRef}>
        <thead>
          <tr className='row gx-0'>
            <th className='fw-bold col-6 col-sm-5 col-md-5 col-lg-6 ps-3 py-3'>Menu</th>
            <th className='fw-bold col-6 col-sm-5 col-md-5 col-lg-5 ps-3 py-3'>Empresa</th>
          </tr>
        </thead>
        {
          allMenu?.map(menu => <MenusAdmin key={menu.id} {...menu} tableRef={tableRef} />)
        }
    </table>
    <div className='d-flex justify-content-center'>
      <ModalForm />
      <button type="button" className="btn btn-outline-secondary rounded-1 fw-bold py-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Crear menu</button>
    </div>
    </>
  );
};

export default MenusPage;
