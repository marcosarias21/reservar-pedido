import { Link } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';

const DropdownUser = ({ user }) => {
  const logOut = useLogout();
  return (
    <div className="dropdown-center me-4">
      <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {user.nombre} {user.apellido}
      </button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item">Mis pedidos</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" onClick={logOut}>Cerrar Sesion</a></li>
      </ul>
    </div>
  );
};

export default DropdownUser;
