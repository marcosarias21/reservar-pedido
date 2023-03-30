import Swal from 'sweetalert2';

const useRegister = () => {
  const onSubmit = async (data) => {
    const resp = await fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    if (resp.ok) {
      Swal.fire(
        'Success!',
        'Usuario creado correctamente!',
        'success',
      );
      setTimeout(() => { window.location.href = '/'; }, 1000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: json.message,
      });
    }
  };
  return onSubmit;
};

export default useRegister;
