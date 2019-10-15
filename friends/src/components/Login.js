import React, { useState } from "react";
import axios from 'axios';
import { axiosWithAuth } from './auth';

const API = `http://localhost:5000/api/login`;
const Login = (props) => {
   
    const [credentials, setCredentials] = useState({
      username: '',
      password: ''
    });
    const [error, setError] = useState(null);
  
    const handleChange = event => {
      event.preventDefault();
      setCredentials({...credentials, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      setError(null);
      event.preventDefault();
      axiosWithAuth().post(`${API}`, credentials)
        .then(res => {
          debugger
          localStorage.setItem('token', res.data.payload);
          props.history.push('/friends')
        })
        .catch(error => {
          setError(error.response.data.error)
        })
    }
  
    return (

        <div className="login-form">
          <div className="login-header mb-4">
            Sign In
          </div>
          <form className='input-form' onSubmit={handleSubmit} method="post">      
            <div className="error mb-2">{error && error}</div>
            <div className="form-group">
              <label htmlFor="username">Email or Username</label>
              <input
                id="username"
                type='text'
                name='username'
                onChange={handleChange}
                value={credentials.username}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  value={credentials.password}
                  required
                  className="form-control"
                />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
    );
  };
  
export default Login;
