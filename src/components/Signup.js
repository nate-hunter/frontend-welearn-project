import React from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../actions/userActions';

class Signup extends React.Component {

  state = {
    username: "",
    password: "",
    role: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label>Student/Tutor</label>
          <input
            name='role'
            placeholder='Student/Tutor'
            value={this.state.role}
            onChange={this.handleChange}
            /><br/>

        <input type='submit'/>
      </form>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
// export default Signup;
