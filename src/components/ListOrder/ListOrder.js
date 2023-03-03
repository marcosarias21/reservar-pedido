import { MdOutlineCalendarToday, MdOutlineFoodBank } from 'react-icons/md';
import './listorder.scss';

const ListOrder = ({ orderSortDate, nombre, apellido }) => {
  return (
    <div className="modal fade" id={nombre && apellido} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">Historial de Pedido de {nombre} {apellido}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {orderSortDate.map(pedido => <div className='list-group' key={pedido.id}>
              <li className='list-items'> <span className='fw-bold'><MdOutlineCalendarToday /> Dia</span>: {pedido.hora} - <span className='fw-bold'><MdOutlineFoodBank />Pedido</span>:{pedido.pedido}
              <hr />
              </li>
            </div>)}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
