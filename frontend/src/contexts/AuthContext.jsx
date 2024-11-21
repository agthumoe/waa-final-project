import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const AuthContext = createContext({ user: null, setUser: () => {} });

const hasAccesstoken = !!localStorage.getItem('accessToken');

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(hasAccesstoken);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
