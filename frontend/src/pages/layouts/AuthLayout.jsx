import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Error from '../../components/Error';
import Header from '../../components/Header';
import AuthContext from '../../contexts/AuthContext';
import useAuth from '../../hooks/useAuth';

const AuthLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { fetchProfile } = useAuth();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <Error
        title="401"
        subtitle="Unauthorized"
        description="You need to login to access this page"
        link={{ to: '/login', label: 'Login to Continue' }}
      />
    );
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthLayout;
