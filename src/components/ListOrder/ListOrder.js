import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiFoodMenu } from 'react-icons/bi';
import './listorder.scss';

const ListOrder = ({ pedido, hora }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item"> <BsFillCalendarDateFill /> <span className='fw-bold'>Dia</span> : {hora} - <BiFoodMenu /> <span className='fw-bold'>Pedido</span>: {pedido}</li>
    </ul>
  );
};

export default ListOrder;
