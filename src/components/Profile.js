import React from 'react';
import { connect } from 'react-redux';
import { Image, Item } from 'semantic-ui-react'
import { Divider, Header, Icon, Table, Button } from 'semantic-ui-react'
import UserDetails from './UserDetails'
import UserBookings from './UserBookings'
import UserEditForm from './UserEditForm'

class Profile extends React.Component {
  state = {
    clicked: false
  }

  handleShowForm = () => {
    this.setState({
      clicked: true
    })
  };

  handleHideForm = () => {
    this.setState({
      clicked: false
    })
  };
  render() {
    console.log('profile',this.props.currentUser)

    let user = this.props.currentUser || {}

    return(
      <div>
        <h1>{user.username ? user.username.toUpperCase() + "'s" : null} PROFILE</h1>

        {this.state.clicked ? <UserEditForm/> : <UserDetails/>}

        <br/><br/>
        {this.state.clicked ? <Button onClick={this.handleHideForm} inverted color='teal' size="small">View Profile</Button> : <Button onClick={this.handleShowForm} color="teal">Update Information</Button>}


        <br/><br/>

        <br/><br/>
        {this.state.clicked ? null : <UserBookings />}


      </div>
    );
  };
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps)(Profile);
