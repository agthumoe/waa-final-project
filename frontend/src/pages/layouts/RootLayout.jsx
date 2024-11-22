import { Outlet } from 'react-router-dom';
import NotificationContainer from '../../containers/NotificationContainer';

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
