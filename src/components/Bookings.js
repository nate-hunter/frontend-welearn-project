import React from 'react';
import { connect } from 'react-redux';
import { getBookings } from '../actions/bookingActions'
import BookingCard from './BookingCard'
import BookingDetails from './BookingDetails'
import FilterBookings from './FilterBookings';

class Bookings extends React.Component {
  state = {
    term: 'All',
    searchText: ""
  }

  componentDidMount(){
    this.props.getBookings()
  };

  handleChange = (e) => {
    let term = e.target.value
    this.setState({term})
  };

  filterSubject = () => {
    if (this.state.term === "All") {
      return this.props.bookings
    } else {
      return this.props.bookings.filter(booking => booking.tutor.specialty === this.state.term)
    }
  };

  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value
    });
  };

  filterTutorLastname = () => {
    // return bookings.filter(booking => booking.tutor.lastname.includes(this.state.searchText))
    const fullyFilteredList = this.filterSubject().filter(booking => booking.tutor.lastname.toLowerCase().includes(this.state.searchText.toLowerCase()))

    return fullyFilteredList.map(bookingObj => <BookingCard key={bookingObj.id} booking={bookingObj}/> )
  };

  // filterTutorLastname = () => {
  //   return this.props.bookings.filter(booking => {
  //     return { booking.tutor.lastname.includes(this.state.searchText) ? booking.tutor.lastname.includes(this.state.searchText) : null }
  //     }
  //   )
  // };




  render() {
    // let { bookings } = this.props

    // const filteredSubjectBookings = this.filterSubject().map(bookingObj =>
    //   <BookingCard key={bookingObj.id} booking={bookingObj} />
    // );

    // const filteredLastnameBookings = this.filterTutorLastname(this.filterSubject()).map(bookingObj =>
    //   <BookingCard key={bookingObj.id} booking={bookingObj} />
    // );

    return(
      <div>
        <br/>
        <FilterBookings
          handleChange={this.handleChange}
          term={this.state.term}
          handleSearch={this.handleSearch}
        />

        <br/>
        {this.props.selectedBooking.id ? <BookingDetails /> : null }
        <h1>Available Sessions</h1>
        {this.filterTutorLastname()}
      </div>
    );
  };
};
// {filteredSubjectBookings}

const mapStateToProps = state => ({
  bookings: state.bookingInfo.bookings,
  selectedBooking: state.bookingInfo.selectedBooking
});

const mapDispatchToProps = { getBookings }

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
