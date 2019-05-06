import { LOAD_BOOKINGS, ADD_BOOKING, REMOVE_BOOKING, EDIT_BOOKING, SELECT_BOOKING } from '../Constants'

const initialState = {
  bookings: [],
  selectedBooking: {}
}

const bookingReducer = (state=initialState, action) => {
  console.log('action',action.type)
  switch (action.type) {
    case LOAD_BOOKINGS:
      return {...state, bookings: action.payload}

    case SELECT_BOOKING:
      return {...state, selectedBooking: action.payload}


    default:
      return state
  }
}

export default bookingReducer;
