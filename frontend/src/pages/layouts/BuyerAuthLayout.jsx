import { Outlet } from 'react-router-dom';
import Error from '../../components/Error';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import useProfile from '../../hooks/useProfile';

const BuyerAuthLayout = () => {
  const { isAuthenticated, isLoading, data } = useProfile();

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

  if (!data?.roles.includes('ROLE_BUYER')) {
    return (
      <Error
        title="403"
        subtitle="Forbidden"
        description="You need to be a buyer to access this page"
      />
    );
  }

  return (  
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BuyerAuthLayout;
