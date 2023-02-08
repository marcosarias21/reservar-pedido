import { useEffect, useState } from 'react';
import { Nabvar } from '../../components/Navbar';
import { ListOrder } from '../../components/ListOrder';
import { TableOrder } from '../../components/TableOrder';

const ClientOrder = () => {
  const { user } = JSON.parse(localStorage.getItem('User'));
  const [historial, setHistorial] = useState([]);
  const getOrderClient = async () => {
    const resp = await fetch(`http://localhost:8000/users/${user.email}`);
    const json = await resp.json();
    setHistorial(json.user.pedidos);
  };

  useEffect(() => {
    getOrderClient();
  }, []);
  return (
    <>
    <Nabvar user={user} />
    <table className='table'>
      <thead>
        <tr>
          <th className='fw-bold ps-3 col-5'>Dia</th>
          <th className='fw-bold ps-3 col-5'>Pedido</th>
          <th></th>
        </tr>
        </thead>
           {
            historial?.map(order => <TableOrder key={order.id} {...order} />)
           }
    </table>
    </>
  );
};

export default ClientOrder;
