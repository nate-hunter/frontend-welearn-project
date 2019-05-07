import React from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../actions/userActions';
import { Button, Checkbox, Form, Grid, Select } from 'semantic-ui-react';

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userLoginFetch(this.state)
  };

  render() {
    const styles = {
      root: {
        marginTop: '5%'
      }
    }

    return(
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

            <Button type="submit" color="yellow">Log In</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(Login);


// <form onSubmit={this.handleSubmit}>
//   <h1>Login</h1>
//
//   <label>Username</label>
//   <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/><br/>
//
//   <label>Password</label>
//   <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} /><br/>
//
//   <input type="submit" />
// </form>
