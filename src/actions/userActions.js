import { LOGIN_USER, LOGOUT_USER, EDIT_USER } from '../Constants'

// ACTION creators:
const loginUser = userObj => ({ type: LOGIN_USER, payload: userObj })
export const logoutUser = () => ({ type: LOGOUT_USER })
const editUser = (user) => ({ type: EDIT_USER, payload: user })

// THUNK creators:
export const userPostFetch = user => dispatch => {
  return fetch(`http://localhost:3000/api/v1/users`, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then(resp => resp.json())
  .then(userObj => {
    if (!userObj.message) {
      localStorage.setItem('token', userObj.jwt)
      dispatch(loginUser(userObj.user))
    }
  })
}

// const loginUser = userObj => ({
//   type: LOGIN_USER,
//   payload: userObj
// })


export const userLoginFetch = user => dispatch => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({user})
  })
  .then(resp => resp.json())
  .then(userObj => {
    if (!userObj.message) {
      localStorage.setItem('token', userObj.jwt)
      dispatch(loginUser(userObj.user))
    }
  })
}

export const getProfileFetch = () => dispatch => {
  const token = localStorage.token;
  if (token) {
    return fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(userObj => {
      if (userObj.message) {
        localStorage.removeItem("token")
      } else {
        dispatch(loginUser(userObj.user))
      }
    })
  }
};

export const userPatchProfile = user => dispatch => {
  const token = localStorage.token;
  if (token) {
    return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(userObj => dispatch(editUser(userObj)))
    // .then(userObj => {debugger})
  } else {
    return "yooo"
  }
};

// ***THIS SHOULD BE IN BOOKING's ACTIONS(?)***
// Oh, it is. why is it here? Delete after presentation.
export const createStudentBooking = booking => dispatch => {
  const token = localStorage.token;
  if (token) {
    return fetch(`http://localhost:3000/api/v1/bookings/${booking.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify(booking)
    })
    .then(resp => resp.json())
    .then(bookingObj => {debugger})
    // .then(bookingObj => dispatch(editBooking(bookingObj)))
  } else {
    return alert("yooo")
  }
};
