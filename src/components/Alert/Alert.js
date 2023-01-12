import './alert.scss';

const Alert = ({ message }) => {
  return (
    <div className="alert alert-danger d-flex flex-column align-items-center" role="alert">
      ❗ {message}
    </div>
  );
};

export default Alert;
