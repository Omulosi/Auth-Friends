import * as ACTION_TYPES from '../actions/action_types'


export const initialState = {
  formData: '',
  error: null
}


export const FormReducer = (state, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          formData: action.payload
        }
      default:
        return {
          ...state,
          error: action.payload
        }
    }
}
