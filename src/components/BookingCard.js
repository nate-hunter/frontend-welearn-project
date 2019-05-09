import React from 'react'
import { connect } from 'react-redux';
import { selectBooking } from '../actions/bookingActions'
import { Button, Card, Image, Divider, Header, Icon } from 'semantic-ui-react'

class BookingCard extends React.Component {

  handleClick = (e) => {
    console.log('yoo', this.props.boo)
  }

  render() {
    const { booking, selectBooking, selected } = this.props

    console.log('booking carddd', this.props)

    const bookingCards = this.props.bookings.map(booking => (
      <Card centered>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>Tutor: {booking.tutor.firstname} {booking.tutor.lastname} | {booking.tutor.specialty.toUpperCase()} </Card.Header>
          <Card.Meta>Date: {booking.date} || Time: {booking.time}</Card.Meta>
          <Card.Description>
            Location:  <strong>{booking.location.address}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={() => selectBooking(booking)}>
              View Session Details
            </Button>
          </div>
        </Card.Content>
      </Card>
      )
    )

    return(
      <React.Fragment>
        <p>|----------------------------------------------------------------------------------------------------|</p>

        {bookingCards}

      </React.Fragment>
    );
  };
};

const mapStateToProps = (state, ownProps) => ({
  // selected: state.bookingInfo.selectedBooking.id === ownProps.booking.id
})

const mapDispatchToProps = (dispatch) => ({
  selectBooking: (booking) => dispatch(selectBooking(booking))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingCard);

// PREVIOUS CODE:
// <h3>Tutor: {booking.tutor.firstname} {booking.tutor.lastname} | {booking.tutor.specialty.toUpperCase()} </h3>
// <h3>Location: {booking.location.address}</h3>
// <h3>Date: {booking.date} || Time: {booking.time}</h3>
//
// <button onClick={() => selectBooking(booking)}>View Session Details</button>
//
// <br/>
// <p>{selected ? "selected" : "not selected"}</p>
// <br/>


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
