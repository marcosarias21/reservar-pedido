import { useEffect, useState } from 'react';
import { Nabvar } from '../../components/Navbar';
import { ListOrder } from '../../components/ListOrder';

const ClientOrder = () => {
  const { user } = JSON.parse(localStorage.getItem('User'));
  const [order, setOrder] = useState([]);
  const getOrderClient = async () => {
    const resp = await fetch(`http://localhost:8000/users/${user.email}`);
    const json = await resp.json();
    setOrder(json.user.pedidos);
  };

  useEffect(() => {
    getOrderClient();
  }, []);
  return (
    <>
    <Nabvar user={user} />
    {
      order?.map(pedido => <ListOrder {...pedido} key={pedido.id} />)
    }
    </>
  );
};

export default ClientOrder;
