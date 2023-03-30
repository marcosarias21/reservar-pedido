import Swal from 'sweetalert2';

const useHandleMenu = () => {
  const handleMenu = async (data) => {
    const resp = await fetch('http://localhost:8000/menu', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    if (resp.ok) {
      Swal.fire(
        'Success!',
        json.message,
        'success',
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  return handleMenu;
};

export default useHandleMenu;
