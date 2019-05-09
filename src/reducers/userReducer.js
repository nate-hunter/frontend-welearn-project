import {  GET_USER, CREATE_USER, LOGIN_USER, LOGOUT_USER, EDIT_USER } from '../Constants'

const intitialState = {
  currentUser: {}
};


const userReducer = (state = intitialState, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload;
    case CREATE_USER:
      return action.payload;
    case LOGIN_USER:
      return {...state, currentUser: action.payload};
    case LOGOUT_USER:
      return {...state, currentUser: {}};
    case EDIT_USER:
      return {...state, currentUser: action.payload}
    default:
        return state;
  }
}

export default userReducer;
