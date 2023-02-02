import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { MenusPage } from './pages/MenusPage';
import { AdminClients } from './pages/AdminClients';
import { ClientOrder } from './pages/ClientOrder';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin/menus' element={<MenusPage />} />
        <Route path='/admin/clients' element={<AdminClients />} />
        <Route path='/pedidos' element={<ClientOrder />} />
      </Routes>
    </>
  );
};

export default App;
