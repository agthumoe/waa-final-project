import { Outlet } from 'react-router-dom';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import useProfile from '../../hooks/useProfile';

const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useProfile();

  if (isLoading) {
    return <Loading />;
  }

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
