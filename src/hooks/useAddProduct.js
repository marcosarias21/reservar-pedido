import Swal from 'sweetalert2';

const useAddProduct = (data) => {
  const addProduct = async () => {
    const resp = await fetch('http://localhost:8000/users', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    if (resp.ok) {
      Swal.fire(
        'Confirmado!',
        `Reservaste ${json.nuevoPedido}`,
        'success',
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: json.message,
      });
    }
  };
  return addProduct;
};

export default useAddProduct;
