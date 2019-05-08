import React from 'react';
import { connect } from 'react-redux';
import { getBookings } from '../actions/bookingActions'
import BookingCard from './BookingCard'
import BookingDetails from './BookingDetails'

class Bookings extends React.Component {

  componentDidMount(){
    this.props.getBookings()
  };

  render() {
    let { bookings } = this.props
    const bookingsArray = bookings.map(bookingObj =>
      <BookingCard key={bookingObj.id} booking={bookingObj} />)

    console.log('bookings props', this.props)
    console.log('bookings', bookings)
    console.log('selected booking blahhh', this.props.selectedBooking)

    return(
      <div>
        <br/>
        {this.props.selectedBooking.id ? <BookingDetails /> : null }
        <h1>Available Sessions</h1>
        {bookingsArray}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  bookings: state.bookingInfo.bookings,
  selectedBooking: state.bookingInfo.selectedBooking
});

const mapDispatchToProps = { getBookings }

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
