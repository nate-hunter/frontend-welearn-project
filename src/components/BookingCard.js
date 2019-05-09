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

    // const bookingCards = this.props.bookings.map(booking => (
    //   <div>
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
    //         {booking.available ? <Button basic color='green' onClick={() => selectBooking(booking)}>
    //           View Session Details
    //         </Button> : <Button basic color='red' onClick={() => selectBooking(booking)}>
    //           Session Unavailable
    //         </Button>
    //       }
    //       </div>
    //     </Card.Content>
    //   </div>
    //   )
    // )

    // <h3>Tutor: {booking.tutor.firstname} {booking.tutor.lastname} | {booking.tutor.specialty.toUpperCase()} </h3>
    // <h3>Location: {booking.location.address}</h3>
    // <h3>Date: {booking.date} || Time: {booking.time}</h3>
    //
    // <button onClick={() => selectBooking(booking)}>View Session Details</button>
    //
    // <br/>
    // <p>{selected ? "selected" : "not selected"}</p>
    // <br/>

    const cardList = {
      header: "Tutor: " + booking.tutor.firstname + " " + booking.tutor.lastname + " " + "|" + " "+ booking.tutor.specialty.toUpperCase(),
      description: "Location:  " + booking.location.address,
      meta: "Date: " + booking.date + " " + "||" + " " + "Time: " + "6:00p",
      extra: <div className='ui two buttons'>
              {booking.available ? <Button basic color='green' onClick={() => selectBooking(booking)}>
                View Session Details
              </Button> : <Button basic color='red' onClick={() => selectBooking(booking)}>
                Session Unavailable
              </Button>
            }
            </div>
    }

    // <Card.Group centered itemsPerRow='2' items={[{
    //   header: props.session.date + " " + props.session.time,
    //   description: "Student Goals: " + props.session.session_goal,
    //   meta: "Length: " + props.session.session_length + " " + "hr(s)" + " " + "|| " + "Cost: " + " " + "$" + props.session.session_cost,
    //   extra: "Tutor: " + "props.tutor"
    // }]} />

    // <p>|----------------------------------------------------------------------------------------------------|</p>
    // <Card.Group centered items={cardList} />
    //
    // <Button>hi</Button>
    return(
      <React.Fragment>

      <Card.Group centered items={[cardList]} />

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

// <div class="ui centered cards">
//   <div class="ui card">
//     <div class="content">
//       <div class="header">Project Report - April</div>
//       <div class="meta">ROI: 30%</div>
//       <div class="description">
//         Leverage agile frameworks to provide a robust synopsis for high level
//         overviews.
//       </div>
//     </div>
//   </div>
//   <div class="ui card">
//     <div class="content">
//       <div class="header">Project Report - May</div>
//       <div class="meta">ROI: 34%</div>
//       <div class="description">
//         Bring to the table win-win survival strategies to ensure proactive
//         domination.
//       </div>
//     </div>
//   </div>
// </div>
// /////////
// <div class="ui cards">
//   <div class="ui card">
//     <div class="content">
//       <div class="header">Steve Sanders</div>
//       <div class="meta">Friends of Elliot</div>
//       <div class="description">
//         Steve wants to add you to the group <strong>best friends</strong>
//       </div>
//     </div>
//     <div class="extra content">
//       <div class="ui two buttons">
//         <button class="ui green basic button">Approve</button
//         ><button class="ui red basic button">Decline</button>
//       </div>
//     </div>
//   </div>
//
//
//   <div class="ui card">
//     <div class="content">
//       <img
//         src="https://react.semantic-ui.com/images/avatar/large/molly.png"
//         class="ui mini right floated image"
//       />
//       <div class="header">Molly Thomas</div>
//       <div class="meta">New User</div>
//       <div class="description">
//         Molly wants to add you to the group <strong>musicians</strong>
//       </div>
//     </div>
//     <div class="extra content">
//       <div class="ui two buttons">
//         <button class="ui green basic button">Approve</button
//         ><button class="ui red basic button">Decline</button>
//       </div>
//     </div>
//   </div>
//   <div class="ui card">
//     <div class="content">
//       <img
//         src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
//         class="ui mini right floated image"
//       />
//       <div class="header">Jenny Lawrence</div>
//       <div class="meta">New User</div>
//       <div class="description">
//         Jenny requested permission to view your contact details
//       </div>
//     </div>
//     <div class="extra content">
//       <div class="ui two buttons">
//         <button class="ui green basic button">Approve</button
//         ><button class="ui red basic button">Decline</button>
//       </div>
//     </div>
//   </div>
// </div>

////

// <div class="ui cards">
//   <div class="ui card">
//     <div class="content">
//       <img
//         src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
//         class="ui mini right floated image"
//       />
//       <div class="header">Steve Sanders</div>
//       <div class="meta">Friends of Elliot</div>
//       <div class="description">
//         Steve wants to add you to the group <strong>best friends</strong>
//       </div>
//     </div>
//     <div class="extra content">
//       <div class="ui two buttons">
//         <button class="ui green basic button">Approve</button
//         ><button class="ui red basic button">Decline</button>
//       </div>
//     </div>
//   </div>
//   <div class="ui card">
//     <div class="content">
//       <img
//         src="https://react.semantic-ui.com/images/avatar/large/molly.png"
//         class="ui mini right floated image"
//       />
//       <div class="header">Molly Thomas</div>
//       <div class="meta">New User</div>
//       <div class="description">
//         Molly wants to add you to the group <strong>musicians</strong>
//       </div>
//     </div>
//     <div class="extra content">
//       <div class="ui two buttons">
//         <button class="ui green basic button">Approve</button
//         ><button class="ui red basic button">Decline</button>
//       </div>
//     </div>
//   </div>
//   <div class="ui card">
//     <div class="content">
//       <img
//         src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
//         class="ui mini right floated image"
//       />
//       <div class="header">Jenny Lawrence</div>
//       <div class="meta">New User</div>
//       <div class="description">
//         Jenny requested permission to view your contact details
//       </div>
//     </div>
//     <div class="extra content">
//       <div class="ui two buttons">
//         <button class="ui green basic button">Approve</button
//         ><button class="ui red basic button">Decline</button>
//       </div>
//     </div>
//   </div>
// </div>

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
