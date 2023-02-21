import { NavLink } from 'react-router-dom';
import { DropdownAdmin } from '../DropdownAdmin';
import { DropdownUser } from '../DropdownUser';
import './navbar.scss';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg nav-bg py-3">
      <div className="container-fluid container">
        <NavLink className="navbar-brand fw-bold nav-title" to="/home">Reserva tu Pedido</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link active fw-bold" aria-current="page" to="/home">Home</NavLink>
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
