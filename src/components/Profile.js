import React from 'react';
import { connect } from 'react-redux';
import { Image, Item } from 'semantic-ui-react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import UserDetails from './UserDetails'
import UserBookings from './UserBookings'

class Profile extends React.Component {
  render() {
    console.log('profile',this.props.currentUser)

    let user = this.props.currentUser || {}

    return(
      <div>
        <h1>{user.username ? user.username.toUpperCase() + "'s" : null} PROFILE</h1>
        <UserDetails />

        <UserBookings />

      </div>
    );
  };
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps)(Profile);
