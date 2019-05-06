import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Home from './components/Home';
import Map from './components/Map'
import Bookings from './components/Bookings'
import Signup from './components/Signup';
import Login from './components/Login';
import { getProfileFetch, logoutUser } from './actions/userActions';



class App extends React.Component {

  componentDidMount = () => {
    this.props.getProfileFetch()
  }; // this will run a GET request with an Authorization header with the token

  handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    this.props.logoutUser()
  };

  render(){
    // <Route path="/profile" component={Profile} />

    return(
      <div className="App">
        <nav className="App-header">
          <br/>
          <a href="https://www.we.co/"><div><img src="https://images.ctfassets.net/e4m0suk6oqie/16UOVXJ7fwcEGIguEg6yqs/ee86ad14fff1f3c536c021835411d168/welogo_white.png" className="App-logo" alt="logo" /></div></a>
          <br/>
          <h1>welearn</h1>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/map">Locations</Link>
          <br/>
          <Link to="/bookings">View Sessions</Link>
          <br/>
          {this.props.currentUser.currentUser.username ? <p>[ signed up ]</p> :  <Link to="/signup">Signup</Link> }
          <br/>
          {this.props.currentUser.currentUser.username ? <p>[ logged in ]</p> :  <Link to="/login">Login</Link> }
          <br/>
          {this.props.currentUser.currentUser.username ? <Link to="/profile">Profile</Link> : <p>[ --- no user or an error --- ]</p> }
          <br/>
          {this.props.currentUser.currentUser.username ? <div> <p>USER: {this.props.currentUser.currentUser.username}</p><button onClick={this.handleClick}>Log Out</button></div> : <p>[ --- no user or an error --- ]</p> }
          <br/>
        </nav>
        <Route path="/" component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <hr/>
        <Route path="/bookings" component={Bookings} />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
