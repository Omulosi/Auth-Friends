import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
}


export const PrivateRoute = ({component: Component, ...rest}) => {
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
