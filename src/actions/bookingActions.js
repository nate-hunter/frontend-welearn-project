import { LOAD_BOOKINGS, ADD_BOOKING, REMOVE_BOOKING, EDIT_BOOKING, SELECT_BOOKING } from '../Constants'


// *ACTION* creators:
const loadBookings = (bookings) => ({ type: LOAD_BOOKINGS, payload: bookings })
const editBooking = (booking) => ({ type: EDIT_BOOKING, payload: booking })
// export const addBooking = (bookingObj) => ({ type: ADD_BOOKING, payload: bookingObj})
// export const removeBooking = (name) => ({ type: REMOVE_BOOKING, payload: name })
export const selectBooking = (booking) => ({ type: SELECT_BOOKING, payload: booking })



// *THUNK* creators
export const getBookings = () => dispatch => {
  return fetch('http://localhost:3000/api/v1/bookings')
  .then(resp => resp.json())
  .then(bookings => dispatch(loadBookings(bookings)))
};


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
    .then(bookingObj => dispatch(editBooking(bookingObj)))
  } else {
    return "yooo"
  }
};

// fetch("URL", method: {
// POST
// BODY
// Headers: {
// Content-type
// Authorization: "Bearer TOKENHERE"
// }
// })

// export const patchAlly = (ally) => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3000/api/v1/allies/${ally.id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//         "accept": "application/json"
//       },
//       body: JSON.stringify(ally)
//     })
//     .then(resp => resp.json())
//     .then(allyObj => dispatch(editAlly(allyObj)))
//   }
// }


// export const getProfileFetch = () => dispatch => {
//   const token = localStorage.token;
//   if (token) {
//     return fetch("http://localhost:3000/api/v1/profile", {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//         "accept": "application/json",
//         "authorization": `Bearer ${token}`
//       }
//     })
//     .then(resp => resp.json())
//     .then(userObj => {
//       if (userObj.message) {
//         localStorage.removeItem("token")
//       } else {
//         dispatch(loginUser(userObj.user))
//       }
//     })
//   }
// };
