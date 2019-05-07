import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

const styles = {
  root: {
    marginTop: '5%'
  }
}

const Signup = () => (
  <Grid centered style={styles.root}>
    <Grid.Column width={6}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email here..." />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password here..." />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password here..." />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

////////

import React from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../actions/userActions';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

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

        <label>Username: </label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password: </label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label>Student/Tutor: </label>
        <select name='role' value={this.state.role} onChange={this.handleChange}>
          <option>-----</option>
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>

        <input type='submit'/>
      </form>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
