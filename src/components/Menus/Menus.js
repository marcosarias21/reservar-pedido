import { useEffect, useState } from 'react';
import useAddProduct from '../../hooks/useAddProduct';
import './menus.scss';

const Menus = ({ imagen, nombre }) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [effect, setEffect] = useState(true);
  const user = JSON.parse(localStorage.getItem('User'));
  const [data, setData] = useState({
    id: '',
    nuevoPedido: '',
    hora: '',
  });
  const addProduct = useAddProduct(data);

  const handleConfirm = () => {
    setEffect(!effect);
    setTimeout(() => {
      setConfirmOrder(!confirmOrder);
    }, 500);
  };

  useEffect(() => {
    const date = new Date();
    setData({
      email: user?.user.email,
      nuevoPedido: nombre,
      hora: date.toLocaleDateString(),
    });
  }, [data.nuevoPedido]);

  return (
    <div className="card col-12 col-sm-5 col-md-11 col-lg-3 col-xl-5">
      <div className="card-body d-flex gap-4 py-2 ">
        <div>
          <img src={imagen} className="card-img-top" alt={imagen} />
        </div>
        <div className='flex-grow-1'>
          <h6 className="card-title">{nombre}</h6>
          <button className='btn-order py-1 px-4 ' onClick={() => handleConfirm()}>Reservar pedido</button>
          {confirmOrder
            && <div className={`d-flex flex-column fadeIn ${effect === true && 'fadeOut'}`}>
                <div className="alert alert-warning mt-2" role="alert"><span className='fw-bold'>Estas por reservar {nombre}!</span></div>
                <button className='btn btn-danger mb-2' onClick={() => setConfirmOrder(false)}>Cancelar</button>
                <button className='btn btn-success' onClick={addProduct}>Confirmar</button>
              </div>
            }
        </div>
        <div>
          <span>
            Precio: $
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menus;
