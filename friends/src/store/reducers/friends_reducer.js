import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
  friends: [],
}

export const FriendsReducer = (state=initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.ADD_FRIEND:
      return {
        ...state,
        friends: action.payload
      }

    case ACTION_TYPES.DELETE_FRIEND: 
      return {
        ...state,
        friends: action.payload
      }

    case ACTION_TYPES.EDIT_FRIEND: 
      return {
        ...state,
        friends: action.payload
      }

    default:
      return state
  }
}
