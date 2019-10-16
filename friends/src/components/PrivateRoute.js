import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../utils/auth';



export const PrivateRoute = ({component: Component, ...rest}) => {
  const [auth] = useAuth();
  return (
    <Route
      {...rest}
      render={props => (
        localStorage.getItem('token')? (
          <Component {...props} />
        ): (
          <Redirect to="/login" />
        )
      )}
    />
  );
}
