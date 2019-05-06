import React from 'react'
import { connect } from 'react-redux';
import { selectBooking } from '../actions/bookingActions'

class BookingCard extends React.Component {

  handleClick = (e) => {
    console.log('yoo')
  }

  render() {
    // console.log('bookingcard',this.props)

    const { booking, selectBooking, selected } = this.props

    return(
      <div>
        <p>|----------------------------------------------------------------------------------------------------|</p>
        <h3>Tutor: {booking.tutor.firstname} {booking.tutor.lastname} | {booking.tutor.specialty.toUpperCase()} </h3>
        <h3>Location: {booking.location.address}</h3>
        <h3>Date: {booking.date} || Time: {booking.time}</h3>

        <button onClick={() => selectBooking(booking)}>View Booking</button>
        <br/><br/>
        <button onClick={this.handleClick}>Show Booking Details</button>

        <br/>
        <p>{selected ? "selected" : "not selected"}</p>
        <p>{selected ? booking.session_goal : null}</p>
        <br/>
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => ({
  selected: state.bookingInfo.selectedBooking.id === ownProps.booking.id
})

const mapDispatchToProps = (dispatch) => ({
  selectBooking: (booking) => dispatch(selectBooking(booking))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingCard);
