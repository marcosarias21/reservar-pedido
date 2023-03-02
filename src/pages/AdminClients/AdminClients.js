import { useEffect, useState } from 'react';
import { Clients } from '../../components/Clients';
import { Nabvar } from '../../components/Navbar';
import { SearchBar } from '../../components/SearchBar';
import { useSearch } from '../../provider/SearchContext';

const AdminClients = () => {
  const { user } = JSON.parse(localStorage.getItem('User'));
  const [clients, setClients] = useState([]);
  const searchUser = useSearch();

  const getClients = async () => {
    const resp = await fetch('http://localhost:8000/users');
    const json = await resp.json();
    setClients(json.users);
  };

  const searchClient = async () => {
    const resp = await fetch(`http://localhost:8000/users/${searchUser}`);
    const json = await resp.json();
    if (json.result) {
      setClients(json.result);
    } else if (json.users) {
      setClients(json.users);
    }
  };
  useEffect(() => {
    if (user.rol !== 'Admin') window.location.href = '/home';
    getClients();
  }, []);

  useEffect(() => {
    searchClient();
  }, [searchUser]);
  return (
    <>
      <Nabvar user={user} />
      <SearchBar />
      <section className='row justify-content-center mt-4'>
        {
          clients?.map(client => <Clients key={client.id} {...client} />)
        }
      </section>
    </>
  );
};

export default AdminClients;
