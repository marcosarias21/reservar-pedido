import React, { useContext } from 'react';
import { MenusAdmin } from '../../components/MenusAdmin';
import { Nabvar } from '../../components/Navbar';
import userContext from '../../provider/UserContext';

const MenusPage = () => {
  const { menuData, dataUser } = useContext(userContext);
  console.log(menuData);
  return (
    <>
    <Nabvar dataUser={dataUser.user} />
      {
        menuData?.map(menu => <MenusAdmin key={menu.id} {...menu} />)
      }
    </>
  );
};

export default MenusPage;
