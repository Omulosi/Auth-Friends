
import React, { useState, useReducer, createContext } from 'react';
import * as ACTIONS from './store/actions/actions';
import { AuthReducer } from './store/reducers/auth_reducer';
import { FormReducer } from './store/reducers/form_reducer';
import { FriendsReducer } from './store/reducers/friends_reducer';
import { useProvideAuth } from './utils/auth';


export const FriendsContext = createContext();
export const AuthContext = createContext();
export const FormContext = createContext();

export const FriendsContextProvider = props => {
  const friendsHook = useReducer(FriendsReducer);

  return (
    <FriendsContext.Provider value={friendsHook}>
      {props.children}
    </FriendsContext.Provider>
  )
}

export const AuthContextProvider = props => {
  const authHook = useProvideAuth();

  return (
    <AuthContext.Provider value={authHook}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const FormContextProvider = props => {
  const formHook = useReducer(FormReducer);

  return (
    <FormContext.Provider value={formHook}>
      {props.children}
    </FormContext.Provider>
  )
}

