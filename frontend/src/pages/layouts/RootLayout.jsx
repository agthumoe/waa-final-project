import { Outlet } from 'react-router-dom';
import NotificationContainer from '../../components/NotificationContainer';

const RootLayout = () => {
  return (
    <>
      <NotificationContainer />
      <div className="bg-white flex flex-col h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
