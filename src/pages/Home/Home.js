import { Hero } from '../../components/Hero';
import { Nabvar } from '../../components/Navbar';
import './home.scss';

const Home = () => {
  const { user } = JSON.parse(localStorage.getItem('User'));

  return (
    <>
    <Nabvar user={user} className={'fixed-top enable-shadows'} />
    <section className='hero'>
      <Hero />
    </section>
    </>
  );
};

export default Home;
