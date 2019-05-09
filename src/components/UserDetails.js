import React from 'react';
import { connect } from 'react-redux';
import { Image, Item } from 'semantic-ui-react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

class UserDetails extends React.Component {
  render() {
    let user = this.props.currentUser
    console.log('stud seshs', user.student_sessions)
    return(
      <React.Fragment>
        <Divider horizontal>
          <Header as='h2'>
            { user.role ? user.role.toUpperCase() : null } INFORMATION
          </Header>
        </Divider>

        <Table definition collapsing className='user-details' >
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Username</Table.Cell>
              <Table.Cell>{user.username}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>First Name</Table.Cell>
              <Table.Cell>{user.firstname ? user.firstname : "---"}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Last Name</Table.Cell>
              <Table.Cell>{user.lastname ? user.lastname : "---"}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Grade</Table.Cell>
              <Table.Cell>{user.grade ? user.grade : "---"}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Age</Table.Cell>
              <Table.Cell>{user.age ? user.age : "---"}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Number of Sessions</Table.Cell>
              <Table.Cell>{user.student_sessions ? user.student_sessions.length : "---"}</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
      </React.Fragment>
    );
  };
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps)(UserDetails);
