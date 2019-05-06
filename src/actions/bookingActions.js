import { LOAD_BOOKINGS, ADD_BOOKING, REMOVE_BOOKING, EDIT_BOOKING, SELECT_BOOKING } from '../Constants'


// *ACTION* creators:
const loadBookings = (bookings) => ({ type: LOAD_BOOKINGS, payload: bookings })
// const editBooking = (booking) => ({ type: EDIT_BOOKING, payload: booking })
// export const addBooking = (bookingObj) => ({ type: ADD_BOOKING, payload: bookingObj})
// export const removeBooking = (name) => ({ type: REMOVE_BOOKING, payload: name })
export const selectBooking = (booking) => ({ type: SELECT_BOOKING, payload: booking })



// *THUNK* creators
export const getBookings = () => dispatch => {
  return fetch('http://localhost:3000/api/v1/bookings')
  .then(resp => resp.json())
  .then(bookings => dispatch(loadBookings(bookings)))
};

// fetch("URL", method: {
// POST
// BODY
// Headers: {
// Content-type
// Authorization: "Bearer TOKENHERE"
// }
// })
