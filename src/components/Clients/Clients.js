import { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { ListOrder } from '../ListOrder';

const Clients = ({
  nombre, apellido, empresa, email, pedidos,
}) => {
  const [userPedido, setUserPedido] = useState(false);
  const [orderSortDate, setOrderSortDate] = useState([]);
  useEffect(() => {
    const latestData = pedidos?.sort(
      (a, b) => new Date(b.hora).getTime() - new Date(a.hora).getTime(),
    );
    setOrderSortDate(latestData);
  }, []);
  return (
      <div className="card col-3 mt-1">
        <div className="card-body">
          <h5 className="card-title">Cliente: {nombre} {apellido}</h5>
          <p className="card-text"><AiOutlineMail /> Email : <span className="fw-bold">{email}</span></p>
          <p className="card-text">Empresa: <span className="fw-bold">{empresa}</span></p>
          <hr/>
          <button type="button" onClick={() => setUserPedido(!userPedido)} className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><BsClockHistory /> Historial de pedidos:</button>
          {
            userPedido ? orderSortDate?.map(pedido => <ListOrder key={pedido.id} {...pedido} />)
              : null
          }
        </div>
      </div>
  );
};

export default Clients;
