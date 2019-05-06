import { LOGIN_USER, LOGOUT_USER } from '../Constants'

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

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})


export const userLoginFetch = user => dispatch => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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

export const logoutUser = () => ({ type: LOGOUT_USER })
