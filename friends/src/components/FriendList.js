import React, { useState, useEffect, useContext } from 'react';
import FriendItem from './FriendItem';
import { axiosWithAuth } from './auth';
import { FriendsContext } from '../context';

const Home = (props) => {
  const [friends, setFriends] = useContext(FriendsContext)
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(error => {
        setError(error.response.data.message)
      })
  }, [])

  return (
    <div className="table-md">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            friends.map((friend) => (
              <FriendItem friend={friend} key={friend.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home;
