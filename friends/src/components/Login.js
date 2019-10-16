import React, { useState } from "react";
import { useAuth } from '../utils/auth';


const Login = (props) => {
  const {authState, login } = useAuth();
  const [user, setUser] = useState({username: '', password: ''});
  
  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    login(user);
  }

  debugger
  
    return (

        <div className="form-data">
          <div className="login-header mb-4">
            Sign In
          </div>
          <form className='input-form' onSubmit={handleSubmit} method="post">      
            <div className="error mb-2">{authState.error && authState.error}</div>
            <div className="form-group">
              <label htmlFor="username">Email or Username</label>
              <input
                id="username"
                type='text'
                name='username'
                onChange={handleChange}
                value={user.username}
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
                  value={user.password}
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
