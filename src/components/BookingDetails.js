import React from 'react'
import { connect } from 'react-redux';

class BookingDetails extends React.Component {
  render(){
    console.log('booking detail', this.props.selectedBooking)

    const { booking } = this.props.selectedBooking

    return(
      <div>
        <h1>Booking Details</h1>
        <hr/>
      </div> 
    );
  };
};

const mapStateToProps = state => ({
  selectedBooking: state.bookingInfo.selectedBooking
})

export default connect(mapStateToProps)(BookingDetails);
