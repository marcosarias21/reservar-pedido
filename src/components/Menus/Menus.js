import { useEffect, useState } from 'react';
import useAddProduct from '../../hooks/useAddProduct';
import './menus.scss';

const Menus = ({ imagen, nombre }) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const user = JSON.parse(localStorage.getItem('User'));
  const [data, setData] = useState({
    id: '',
    nuevoPedido: '',
    hora: '',
  });
  const addProduct = useAddProduct(data);

  useEffect(() => {
    const date = new Date();
    setData({
      email: user?.user.email,
      nuevoPedido: nombre,
      hora: date.toLocaleDateString(),
    });
  }, [data.nuevoPedido]);

  return (
    <div className="card col-sm-12 col-md-5 col-lg-3 col-xl-5 mt-3 mx-1">
      <img src={imagen} className="card-img-top" alt={imagen} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <button className='btn-order' onClick={() => setConfirmOrder(!confirmOrder)}>Reservar pedido</button>
        {confirmOrder
          ? <div className='d-flex flex-column'>
              <div className="alert alert-warning mt-2" role="alert"><span className='fw-bold'>Estas por reservar {nombre}!</span></div>
              <button className='btn btn-danger mb-2' onClick={() => setConfirmOrder(false)}>Cancelar</button>
              <button className='btn btn-success' onClick={addProduct}>Confirmar</button>
            </div>
          : null}
      </div>
    </div>
  );
};

export default Menus;
