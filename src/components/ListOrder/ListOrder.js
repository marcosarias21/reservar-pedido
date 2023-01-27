import './listorder.scss';

const ListOrder = ({ pedido, hora }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item"> Dia: {hora} - Pedido: {pedido}</li>
    </ul>
  );
};

export default ListOrder;
