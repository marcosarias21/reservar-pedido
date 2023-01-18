import './container.scss';

const Container = ({ children }) => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center form-container">
      {children}
    </section>
  );
};

export default Container;
