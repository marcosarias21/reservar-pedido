import { useContext } from 'react';
import { Alert } from '../../components/Alert';
import userContext from '../../provider/UserContext';

const Home = () => {
  const { dataUser } = useContext(userContext);
  console.log(dataUser);
  return (
    <div> hola {dataUser?.nombre} {dataUser?.apellido}
      <Alert />
    </div>
  );
};

export default Home;
