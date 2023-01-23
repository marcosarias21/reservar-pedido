const useLogout = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return logOut;
};

export default useLogout;
