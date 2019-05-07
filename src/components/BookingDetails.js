import React from 'react'
import { connect } from 'react-redux';

class BookingDetails extends React.Component {

  handleClick = (location) => {
    // debugger
    console.log('address',location.address)
    // console.log('address',this.props.selectedLocation.address)

  }


  render(){
    // console.log('booking detail', this.props.selectedBooking)
    // console.log('location?', this.props.selectedLocation)
    const booking = this.props.selectedBooking
    // const { location } = booking || {}
    // console.log('booku',booking.location)
    const location = this.props.selectedLocation || {}
    const tutor = this.props.selectedTutor || {}
    // console.log('booking location', location)
    // // console.log('booking location address', location.address)
    // console.log('booking props', this.props)
    console.log('LOC', location);
    console.log('BOK', booking);

    return(
      <div>
        <hr/>
        <h1>Booking Details</h1>
        <h3>{location.address}</h3>

        <div>
          <p>{booking.date}</p>
          <p>{booking.time}</p>
        </div>

        <br/>

        <p>|====================================================================================================|</p>

      </div>
    );
  };
};

const mapStateToProps = state => ({
  selectedBooking: state.bookingInfo.selectedBooking,
  selectedLocation: state.bookingInfo.selectedBooking.location,
  selectedTutor: state.bookingInfo.selectedBooking.tutor
})

export default connect(mapStateToProps)(BookingDetails);
