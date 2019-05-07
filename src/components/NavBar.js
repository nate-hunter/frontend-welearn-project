import React from 'react';
import { Menu } from 'semantic-ui-react';
// import '../style/styles.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom';


// <img src="https://images.ctfassets.net/e4m0suk6oqie/16UOVXJ7fwcEGIguEg6yqs/ee86ad14fff1f3c536c021835411d168/welogo_white.png" alt="we logo" />

const NavBar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
        <Link to="/"><h3>welearn</h3></Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/map">Locations</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/bookings">View Sessions</Link>
      </Menu.Item>
    </Menu.Menu>

    <Menu.Menu position="right">
      <Menu.Item>
        {this.props.currentUser.currentUser.username ? <p>[ signed up ]</p> :  <Link to="/signup">Sign Up</Link> }
        Sign Up
      </Menu.Item>
    </Menu.Menu>
    <Menu.Item>
      {this.props.currentUser.currentUser.username ? <p>[ logged in ]</p> :  <Link to="/login">Log In</Link> }
    </Menu.Item>
  </Menu>
)

export default NavBar;


// <nav className="App-header">
//   <br/>
//   <a href="https://www.we.co/"><div><img src="https://images.ctfassets.net/e4m0suk6oqie/16UOVXJ7fwcEGIguEg6yqs/ee86ad14fff1f3c536c021835411d168/welogo_white.png" className="App-logo" alt="logo" /></div></a>
//   <br/>
//   <h1>welearn</h1>
//   <Link to="/">Home</Link>
//   <br/>
//   <Link to="/map">Locations</Link>
//   <br/>
//   <Link to="/bookings">View Sessions</Link>
//   <br/>
//   {this.props.currentUser.currentUser.username ? <p>[ signed up ]</p> :  <Link to="/signup">Signup</Link> }
//   <br/>
//   {this.props.currentUser.currentUser.username ? <p>[ logged in ]</p> :  <Link to="/login">Login</Link> }
//   <br/>
//   {this.props.currentUser.currentUser.username ? <Link to="/profile">Profile</Link> : <p>[ --- no user or an error --- ]</p> }
//   <br/>
//   {this.props.currentUser.currentUser.username ? <div> <p>USER: {this.props.currentUser.currentUser.username}</p><button onClick={this.handleClick}>Log Out</button></div> : <p>[ --- no user or an error --- ]</p> }
//   <br/>
// </nav>
// <Route path="/" component={Home} />
// <Route path="/map" component={Map} />
// <Route path="/signup" component={Signup} />
// <Route path="/login" component={Login} />
// <hr/>
// <Route path="/bookings" component={Bookings} />










//
