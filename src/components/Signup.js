import React from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../actions/userActions';
import { Button, Checkbox, Form, Grid, Select } from 'semantic-ui-react';

class Signup extends React.Component {

  state = {
    username: "",
    password: "",
    role: ""
  }

  handleChange = (e, data) => {
    console.log("name", e.target)
    console.log("value", e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSelect = (e, data) => {
    this.setState({
      [data.name]: data.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    const styles = {
      root: {
        marginTop: '5%'
      }
    }

    const options = [
      { key: 'student', text: 'Student', value: 'student' },
      { key: 'tutor', text: 'Tutor', value: 'tutor' }
    ]

    return (
      <Grid centered style={styles.root}>
        <Grid.Column width={6}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input name='username' placeholder='Username...' value={this.state.username} onChange={this.handleChange} />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input type="password" name="password" placeholder="Password..." value={this.state.password} onChange={this.handleChange} />
            </Form.Field>

            <Form.Select label="Student/Tutor" options={options} placeholder="Role" name="role" value={this.state.role} onChange={this.handleSelect} />


            <Button type="submit" color="yellow">Sign Up</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);


// <Form.Field>
//   <label>Student/Tutor: </label>
//   <select name='role' value={this.state.role} onChange={this.handleChange}>
//     <option>-----</option>
//     <option value="student">Student</option>
//     <option value="tutor">Tutor</option>
//   </select>
// </Form.Field>


// ///////
// <form onSubmit={this.handleSubmit}>
//   <h1>Sign Up For An Account</h1>
//
//   <label>Username: </label>
//   <input
//     name='username'
//     placeholder='Username'
//     value={this.state.username}
//     onChange={this.handleChange}
//     /><br/>
//
//   <label>Password: </label>
//   <input
//     type='password'
//     name='password'
//     placeholder='Password'
//     value={this.state.password}
//     onChange={this.handleChange}
//     /><br/>
//
//   <label>Student/Tutor: </label>
//   <select name='role' value={this.state.role} onChange={this.handleChange}>
//     <option>-----</option>
//     <option value="student">Student</option>
//     <option value="tutor">Tutor</option>
//   </select>
//
//   <input type='submit'/>
// </form>
// //////
