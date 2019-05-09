import React from 'react';
import { connect } from 'react-redux';
import { Image, Item } from 'semantic-ui-react'
import { Divider, Header, Icon, Table, Card, Button } from 'semantic-ui-react'
import UserBookingCard from './UserBookingCard'

class UserBookings extends React.Component {
  render() {
    let user = this.props.currentUser
    let { student_sessions } = this.props.currentUser
    let ss = student_sessions || {}
    console.log('student sessionssss', this.props)

    // let sessionsList = student_sessions ? student_sessions.map(session => <UserBookingCard key={session.id} session={session} />) : null

    // let tutorFind = this.props.currentUser.tutors.find(tutor => tutor.id === session.tutor_id)
    // console.log('tutor fiind',tutorFind)

    let sessionsList = student_sessions ? student_sessions.map(session => {
      let sessionItem = {
          header: session.date + " " + "||" + " " + "6:00 pm",
          description: session.session_goal,
          meta: "Length: " + session.session_length + " " + "hr(s)" + " " + "|| " + "Cost: " + " " + "$" + session.session_cost,
          extra: "Tutor: " + session.tutor_id
        }
        return sessionItem
      }
    ) : null;

    console.log('items??', sessionsList)


    return(
      <React.Fragment>
        <Divider horizontal>
          <Header as='h2'>
            User Sessions
          </Header>
        </Divider>

        <Card.Group centered items={sessionsList} />
        { ss.length > 0 ? "" : <h3 color="red">- No Sessions Booked -</h3>}

      </React.Fragment>
    )
  }
}
//   render() {
//     let user = this.props.currentUser
//     let { student_sessions } = this.props.currentUser || {}
//     console.log('student sessionssss', student_sessions)
//     // let sessionsList = student_sessions.map(session => <UserBookingCard key={session.id} session={session} />)
//     let sessionsList = { student_sessions.length > 0 ? student_sessions.map(session => <UserBookingCard key={session.id} session={session} />) : {} }
//     return(
//       <div>
//
//         <Divider horizontal>
//           <Header as='h2'>
//              { user.role ? user.role.toUpperCase() : null } BOOKINGS
//           </Header>
//         </Divider>
//
//         {sessionsList}
//
//         <h3>Upcoming Sessions</h3>
//
//         <Item.Group>
//           <Item>
//             <Item.Content>
//               <Item.Header as='a'>Header</Item.Header>
//               <Item.Meta>Description</Item.Meta>
//               <Item.Description>
//
//               </Item.Description>
//               <Item.Extra>Additional Details</Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//
//         <h3>Past Bookings</h3>
//         <Item.Group>
//           <Item>
//             <Item.Content>
//               <Item.Header as='a'>Header</Item.Header>
//               <Item.Meta>Description</Item.Meta>
//               <Item.Description>
//
//               </Item.Description>
//               <Item.Extra>Additional Details</Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//       </div>
//     );
//   };
// };


const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps)(UserBookings);




// class UserBookings extends React.Component {
//   render() {
//     let user = this.props.currentUser
//     // let sessions = user.student_sessions || {}
//     //
//     // let studentSessions = sessions.map(session => {
//     //   return <UserBookingCard key={session.id} session={session} />
//     // })
//
//     let { student_sessions } = this.props.currentUser || {}
//
//     console.log('student sessionssss', student_sessions)
//
//     // let sessionsList = student_sessions.map(session => <UserBookingCard key={session.id} session={session} />)
//
//     let sessionsList = { student_sessions.length > 0 ? student_sessions.map(session => <UserBookingCard key={session.id} session={session} />) : {} }
//
//
//     // <UserBookingCard sessions='yo' />
//
//     return(
//       <div>
//
//         <Divider horizontal>
//           <Header as='h2'>
//              { user.role ? user.role.toUpperCase() : null } BOOKINGS
//           </Header>
//         </Divider>
//
//         {sessionsList}
//
//         <h3>Upcoming Sessions</h3>
//
//         <Item.Group>
//           <Item>
//             <Item.Content>
//               <Item.Header as='a'>Header</Item.Header>
//               <Item.Meta>Description</Item.Meta>
//               <Item.Description>
//
//               </Item.Description>
//               <Item.Extra>Additional Details</Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//
//         <h3>Past Bookings</h3>
//         <Item.Group>
//           <Item>
//             <Item.Content>
//               <Item.Header as='a'>Header</Item.Header>
//               <Item.Meta>Description</Item.Meta>
//               <Item.Description>
//
//               </Item.Description>
//               <Item.Extra>Additional Details</Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//       </div>
//     );
//   };
// };

////////

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



























//
