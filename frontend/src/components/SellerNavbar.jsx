import { Link } from 'react-router-dom';
import useProfile from '../hooks/useProfile';
import Button from './Button';
import Dropdown from './Dropdown';

const SellerNavbar = () => {
  const { logout, data } = useProfile();

  const profilePic = data?.file;
  const initials =
    data?.name
      ?.split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase() || 'U';

  return (
    <nav className="bg-sky-950 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <Dropdown
            menuItems={[
              { label: 'Profile', to: '/profile', type: 'link' },
              { label: 'Logout', onClick: logout, type: 'button' },
            ]}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white font-medium">{initials}</span>
                )}
              </div>
              <span>{data?.name || 'User'}</span>
            </div>
          </Dropdown>
          <Link to="/">
            <Button color="danger">Storefront</Button>
          </Link>
        </div>
        <button className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default SellerNavbar;
