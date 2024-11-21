import { useContext } from 'react';
import api, { login } from '../api/api';
import AuthContext from '../contexts/AuthContext';

function useAuth() {
  const { setAuthenticated, setUser } = useContext(AuthContext);

  const handleLogin = async (data) => {
    const response = await login(data);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setAuthenticated(true);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthenticated(false);
    setUser(null);
  };

  const fetchProfile = async () => {
    const response = await api.get('/profile');
    if (response.status === 200) {
      setUser(response.data);
    }
  };

  return { handleLogin, handleLogout, fetchProfile };
}

export default useAuth;
