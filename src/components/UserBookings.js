import React from 'react';
import { connect } from 'react-redux';
import { Image, Item } from 'semantic-ui-react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

class UserBookings extends React.Component {
  render() {
    let user = this.props.currentUser

    return(
      <div>

        <Divider horizontal>
          <Header as='h2'>
             { user.role ? user.role.toUpperCase() : null } BOOKINGS
          </Header>
        </Divider>

        <h3>Upcoming Bookings</h3>

        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>

              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

        <h3>Past Bookings</h3>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>

              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps)(UserBookings);
