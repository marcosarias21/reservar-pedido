import { useContext } from 'react';
import userContext from '../../provider/UserContext';

const Home = () => {
  const { dataUser } = useContext(userContext);
  const { nombre, apellido } = dataUser;
  return (
    <div> hola {nombre} {apellido}</div>
  );
};

export default Home;
