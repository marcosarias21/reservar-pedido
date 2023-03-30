import Swal from 'sweetalert2';

const useCreateMenu = () => {
  const createMenu = async (data) => {
    const resp = await fetch('http://localhost:8000/menu', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    console.log(json);
    if (resp.ok) {
      Swal.fire(
        'Success!',
        json.message,
        'success',
      );
    }
  };
  return createMenu;
};

export default useCreateMenu;
