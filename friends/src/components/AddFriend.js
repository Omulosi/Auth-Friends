import React, { useState, useEffect } from 'react';

const AddFriend = (props) => {
  
  const [friend, setFriend] = useState({name:'', age: null, email:''})

  const handleChange = (e) => {
    setFriend({...friend, [e.target.name]: [e.target.value]})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <div className="add-friend-form">
      <div className="login-header mb-4">
        Add Friend
      </div>
      <form className='input-form' onSubmit={handleSubmit} method="post">      
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type='text'
            name='username'
            onChange={handleChange}
            value={friend.username}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Age</label>
          <input
              type='number'
              name='age'
              onChange={handleChange}
              value={friend.password}
              required
              className="form-control"
            />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
              type='email'
              name='email'
              onChange={handleChange}
              value={friend.email}
              required
              className="form-control"
            />
        </div>
        <button className="btn btn-primary">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
