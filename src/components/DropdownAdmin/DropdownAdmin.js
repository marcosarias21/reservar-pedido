import { Link } from 'react-router-dom';
import { GrUserAdmin } from 'react-icons/gr';
import { CiLogout } from 'react-icons/ci';
import { BsPeople } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';
import useLogout from '../../hooks/useLogout';

const DropdownAdmin = ({ user }) => {
  const logOut = useLogout();
  return (
    <div className="dropdown-center me-4">
      <button className="btn dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false"><GrUserAdmin /> {user.nombre} {user.apellido}</button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/admin/clients"><BsPeople />Clientes</Link></li>
        <li><Link className="dropdown-item" to="/admin/menus"><MdRestaurantMenu />Menus</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><button className="dropdown-item" onClick={logOut}><CiLogout />Cerrar Sesion</button></li>
      </ul>
    </div>
  );
};

export default DropdownAdmin;
