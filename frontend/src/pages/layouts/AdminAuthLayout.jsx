import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';
import AdminSidebar from '../../components/AdminSidebar';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useProfile from '../../hooks/useProfile';

const AdminAuthLayout = () => {
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

  if (!data?.roles.includes('ROLE_ADMIN')) {
    return (
      <Error
        title="403"
        subtitle="Forbidden"
        description="You need to be an admin to access this page"
      />
    );
  }

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminAuthLayout;
