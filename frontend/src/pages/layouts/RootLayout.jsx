import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="bg-white">
      <Outlet />
    </div>
  );
};

export default RootLayout;
