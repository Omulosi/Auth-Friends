import * as ACTION_TYPES from './action_types';

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE
  }
}

export const loginSuccess = () => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS
  }
}

export const loginFailure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE
  }
}


export const user_input_submit = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT_SUBMIT,
    payload: text
  }
}

export const addFriend = (data) => {
  return {
    type: ACTION_TYPES.ADD_FRIEND,
    payload: data
  }
}
export const deleteFriend = (data) => {
  return {
    type: ACTION_TYPES.DELETE_FRIEND,
    payload: data
  }
}
export const editFriend = (data) => {
  return {
    type: ACTION_TYPES.EDIT_FRIEND,
    payload: data
  }
}
