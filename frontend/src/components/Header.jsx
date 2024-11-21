import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const NavItem = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-white px-3 py-2 text-sm font-medium hover:bg-gray-700 rounded-md transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Header = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  const hasAuthInfo = isAuthenticated && user;

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavItem to="/auth/posts">Posts</NavItem>
                <NavItem to="/auth/posts/new">New Post</NavItem>
              </div>
            </div>
          </div>
          <div className="flex absolute inset-y-0 right-0 items-center">
            <div className="flex shrink-0 items-end">
              {!hasAuthInfo && <NavItem to="/login">Login</NavItem>}
              {hasAuthInfo && (
                <>
                  <NavItem to="/auth">Profile</NavItem>
                  <div className="text-white px-3 py-2 text-sm font-medium">
                    Welcome {user?.name}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
