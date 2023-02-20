import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { CiLogout } from 'react-icons/ci';
import { AiOutlineHistory } from 'react-icons/ai';
import useLogout from '../../hooks/useLogout';

const DropdownUser = ({ user }) => {
  const logOut = useLogout();
  return (
    <div className="dropdown-center me-4">
      <button className="btn dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false"><RxAvatar /> {user.nombre} {user.apellido}</button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to='/pedidos'><AiOutlineHistory /> Mis pedidos</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" onClick={logOut}><CiLogout />Cerrar Sesion</a></li>
      </ul>
    </div>
  );
};

export default DropdownUser;
