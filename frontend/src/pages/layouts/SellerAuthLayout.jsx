import { Outlet } from 'react-router-dom';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import SellerNavbar from '../../components/SellerNavbar';
import SellerSidebar from '../../components/SellerSidebar';
import useProfile from '../../hooks/useProfile';

const SellerAuthLayout = () => {
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

  if (!data?.roles.includes('ROLE_SELLER')) {
    return (
      <Error
        title="403"
        subtitle="Forbidden"
        description="You need to be a seller to access this page"
      />
    );
  }

  return (
    <div className="flex h-screen">
      <SellerSidebar />
      <div className="flex-1 flex flex-col">
        <SellerNavbar />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerAuthLayout;
