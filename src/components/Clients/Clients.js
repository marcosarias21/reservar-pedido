import { useEffect, useState } from 'react';
import { ListOrder } from '../ListOrder';

const Clients = ({
  nombre, apellido, empresa, email, pedidos,
}) => {
  const [userPedido, setUserPedido] = useState(false);
  console.log(userPedido);
  return (
      <div className="card col-2">
        <div className="card-body">
          <h5 className="card-title">Cliente: {nombre} {apellido}</h5>
          <p className="card-text">Mail: <span className="fw-bold">{email}</span></p>
          <p className="card-text">Empresa: <span className="fw-bold">{empresa}</span></p>
          <hr/>
          <button type="button" onClick={() => setUserPedido(!userPedido)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Historial de pedidos:</button>
          {
            userPedido ? pedidos?.map(pedido => <ListOrder key={pedido.id} {...pedido} />)
              : null
          }
        </div>
      </div>
  );
};

export default Clients;
