import React from 'react';
import { connect } from 'react-redux';
import { getBookings } from '../actions/bookingActions'
import BookingCard from './BookingCard'
import BookingDetails from './BookingDetails'
import FilterBookings from './FilterBookings';
import { Divider, Header, Icon, Table, Card, Button, Image, Item, Grid, Segment } from 'semantic-ui-react'

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

  ///////////////////// CARDS - begin /////////////////////
  // let sessionsList = student_sessions ? student_sessions.map(session => {
  //   let sessionItem = {
  //       header: session.date + " " + session.time,
  //       description: session.session_goal,
  //       meta: "Length: " + session.session_length + " " + "hr(s)" + " " + "|| " + "Cost: " + " " + "$" + session.session_cost,
  //       extra: "Tutor: " + "poop"
  //     }
  //     return sessionItem
  //   }
  // ) : null;

  // filterTutorLastname = () => {
  //   const fullyFilteredList = this.filterSubject().filter(booking => booking.tutor.lastname.toLowerCase().includes(this.state.searchText.toLowerCase()))
  //
    // return fullyFilteredList.map(booking => (
    //   <Card>
    //     <Card.Content>
    //       <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
    //       <Card.Header>Tutor: {booking.tutor.firstname} {booking.tutor.lastname} | {booking.tutor.specialty.toUpperCase()} </Card.Header>
    //       <Card.Meta>Date: {booking.date} || Time: {booking.time}</Card.Meta>
    //       <Card.Description>
    //         Location:  <strong>{booking.location.address}</strong>
    //       </Card.Description>
    //     </Card.Content>
    //     <Card.Content extra>
    //       <div className='ui two buttons'>
    //         <Button basic color='green' onClick={() => selectBooking(booking)}>
    //           View Session Details
    //         </Button>
    //       </div>
    //     </Card.Content>
    //   </Card>
    //   )
  //
  //   )
  // };

  ///////////////////// CARDS - end /////////////////////




  render() {
    // let { bookings } = this.props

    // const filteredSubjectBookings = this.filterSubject().map(bookingObj =>
    //   <BookingCard key={bookingObj.id} booking={bookingObj} />
    // );

    // const filteredLastnameBookings = this.filterTutorLastname(this.filterSubject()).map(bookingObj =>
    //   <BookingCard key={bookingObj.id} booking={bookingObj} />
    // );

    const fullyFilteredList = this.filterSubject().filter(booking => booking.tutor.lastname.toLowerCase().includes(this.state.searchText.toLowerCase()))
    console.log('fully filtered', fullyFilteredList)

    // {this.filterTutorLastname()}
    // <BookingCard bookings={fullyFilteredList} />

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





        <Divider horizontal>
          <Header as='h1'>
            Available Sessions
          </Header>
        </Divider>




        <Grid.Column key="2">
          {this.filterTutorLastname()}
        </Grid.Column>

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


// // BOILERPLATE:
// <Card.Group>
//     <Card>
//       <Card.Content>
//         <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
//         <Card.Header>Steve Sanders</Card.Header>
//         <Card.Meta>Friends of Elliot</Card.Meta>
//         <Card.Description>
//           Steve wants to add you to the group <strong>best friends</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
//         <Card.Header>Molly Thomas</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Molly wants to add you to the group <strong>musicians</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
//         <Card.Header>Jenny Lawrence</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>Jenny requested permission to view your contact details</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//   </Card.Group>
