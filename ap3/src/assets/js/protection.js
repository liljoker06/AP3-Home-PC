import React from 'react';
import { Navigate,Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem('email');

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to="/Connexion"/> 
        )
      }
    />
  );
};

export default ProtectedRoute;
