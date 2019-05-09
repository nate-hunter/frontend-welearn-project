import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import { Button, Checkbox, Form, Grid, Select } from 'semantic-ui-react';
import { userPatchProfile } from '../actions/userActions';

class UserEditForm extends React.Component {

  state = {
    id: 0,
    firstname: "",
    lastname: "",
    age: "",
    grade: ""
  };

  handleChange = (e) => {
    let userId = this.props.currentUser.id
    this.setState({
      id: userId,
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userPatchProfile(this.state)
  };

  render() {
    console.log("currentUser", this.props.currentUser.username )
    let user = this.props.currentUser || {}

    return(
      <React.Fragment>
        <Divider horizontal>
          <Header as='h2'>
            EDIT { user.username ? user.username.toUpperCase() : null }
          </Header>
        </Divider>

        <Grid centered>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>First Name</label>
              <input name='firstname' placeholder='firstname...' value={this.state.firstname} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input name='lastname' placeholder='lastname...' value={this.state.lastname} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input name='age' placeholder='age...' value={this.state.age} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Grade</label>
              <input name='grade' placeholder='grade...' value={this.state.grade} onChange={this.handleChange} />
            </Form.Field>

            <Button type="submit" color="yellow">Update Information</Button>

          </Form>
        </Grid>

      </React.Fragment>
    );
  };
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = dispatch => ({
  userPatchProfile: userInfo => dispatch(userPatchProfile(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);
