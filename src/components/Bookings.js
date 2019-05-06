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

    return(
      <div>
        <BookingDetails />
        <h1>Available Sessions</h1>
        {bookingsArray}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  bookings: state.bookingInfo.bookings
});

const mapDispatchToProps = { getBookings }

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
