import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

// class UserBookingCard extends React.Component {
//
//   render(){
//     console.log('user booking card', this.props)
//     const items = [
//       {
//         header: "uhh",
//         description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//       },
//       {
//         header: 'Project Report - May',
//         description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
//         meta: 'ROI: 34%',
//       },
//     ]
//
//     return(
//       <React.Fragment>
//         <h1>{this.props.session.date}</h1>
//
//       </React.Fragment>
//     );
//   };
// };

const UserBookingCard = (props) => {
  console.log('user booking card', props)
      const items = [
        {
          header: (props.date),
          description: props.session_goal,
          meta: 'ROI: 30%',
          who: "nate",
        },
        {
          header: 'That ---Project Report - May',
          description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
          meta: 'ROI: 34%',
          who: "nate",
        },
      ]
  // <Card.Group centered items={items} />

  return(
    <div>
        <Card.Group centered itemsPerRow='2' items={[{
          header: props.session.date + " " + props.session.time,
          description: "Student Goals: " + props.session.session_goal,
          meta: "Length: " + props.session.session_length + " " + "hr(s)" + " " + "|| " + "Cost: " + " " + "$" + props.session.session_cost,
          extra: "Tutor: " + "props.tutor"
        }]} />
    </div>
  )
}

export default UserBookingCard;


// BOILERPLATE:
// class UserBookingCard extends React.Component {
//   render(){
//     const items = [
//       {
//         header: 'Project Report - April',
//         description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//         meta: 'ROI: 30%',
//       },
//       {
//         header: 'Project Report - May',
//         description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
//         meta: 'ROI: 34%',
//       },
//     ]
//
//     return(
//       <React.Fragment>
//         <Card link='true'>
//           <Card.Group centered items={items} />
//         </Card>
//       </React.Fragment>
//     );
//   };
// };
