/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsClockHistory, BsFillPersonFill } from 'react-icons/bs';
import { ListOrder } from '../ListOrder';

const Clients = ({
  nombre, apellido, empresa, email, pedidos, _id,
}) => {
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
          <h5 className="card-title"><BsFillPersonFill />Cliente: {nombre} {apellido}</h5>
          <p className="card-text"><AiOutlineMail /> Email : <span className="fw-bold">{email}</span></p>
          <p className="card-text">Empresa: <span className="fw-bold">{empresa}</span></p>
          <hr />
          <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target={`#${nombre && apellido}`}><BsClockHistory /> Historial de pedidos</button>
          <ListOrder nombre={nombre} apellido={apellido} orderSortDate={orderSortDate}/>
        </div>
      </div>
  );
};

export default Clients;
