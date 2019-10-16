import React, { useState, createContext } from 'react';

export const FriendsContext = createContext();

const FriendsContextProvider = props => {
  const friendsHook = useState([]);

  return (
    <FriendsContext.Provider value={friendsHook}>
      {props.children}
    </FriendsContext.Provider>
  )
}

export default FriendsContextProvider;
