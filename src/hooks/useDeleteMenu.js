import Swal from 'sweetalert2';

const useDeleteMenu = () => {
  const deleteMenu = async (data) => {
    const resp = await fetch('http://localhost:8000/menu', {
      method: 'DELETE',
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
  return deleteMenu;
};

export default useDeleteMenu;
