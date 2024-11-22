import _ from 'lodash';
import { Link } from 'react-router-dom';
import useProfile from '../hooks/useProfile';
import Cart from './Cart';
import Dropdown from './Dropdown';

const Navbar = () => {
  const { logout, data, isAuthenticated } = useProfile();

  const profilePic = data?.file;
  const initials =
    data?.name
      ?.split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase() || 'U';

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          Moe Marketplace
        </Link>

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shops" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {isAuthenticated && _.includes(data?.roles, 'ROLE_BUYER') && <Cart />}

          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
              >
                Register
              </Link>
            </>
          ) : (
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
                <span>{data?.username || 'User'}</span>
              </div>
            </Dropdown>
          )}
        </div>

        {/* Mobile Menu Toggle */}
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

export default Navbar;
