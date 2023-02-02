import { useEffect } from 'react';
import { Nabvar } from '../../components/Navbar';
import { ListOrder } from '../../components/ListOrder';

const ClientOrder = () => {
  const { user } = JSON.parse(localStorage.getItem('User'));
  const getOrderClient = async () => {
    const resp = await fetch(`http://localhost:8000/users/${user.email}`);
    const json = await resp.json();
    console.log(json);
  };

  useEffect(() => {
    getOrderClient();
  }, []);
  console.log(user.pedidos);
  return (
    <>
    <Nabvar user={user} />
    {
      user?.pedidos?.map(pedido => <ListOrder {...pedido} key={pedido.id} />)
    }
    </>
  );
};

export default ClientOrder;
