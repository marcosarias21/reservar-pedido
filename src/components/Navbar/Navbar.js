import { Link, NavLink } from 'react-router-dom';
import { DropdownAdmin } from '../DropdownAdmin';
import { DropdownUser } from '../DropdownUser';
import gorritoIcono from '../../assets/images/cocinero.png';
import './navbar.scss';

const Navbar = ({ user, className }) => {
  return (
    <nav className={`navbar navbar-expand-lg nav-bg py-3 ${className}`}>
      <div className="container-fluid container">
        <div>
          <img src={gorritoIcono} className='size-icon' />
          <Link className="navbar-brand fw-bold nav-title" to="/home">Reserva tu Pedido</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'nav-link active fw-bold' : 'nav-link fw-bold')
            } aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'nav-link active fw-bold' : 'nav-link fw-bold')
            } aria-current="page" to="/menus">Menu</NavLink>
            </li>
          </ul>
          <div>
            {
              user.rol === 'Admin' ? <DropdownAdmin user={user} /> : <DropdownUser user={user} />
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
