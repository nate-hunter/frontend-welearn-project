import React from 'react';
import { connect } from 'react-redux';
import { patchAlly } from '../Redux/actions';

class EditAllyForm extends React.Component {

  state = {
    id: 0,
    name: "",
    house: "",
    strength: "",
    allegience: "",
    alive: ""
  };

  handleChange = (e) => {
    console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // this says that if we get a new selected ally on state, we will set state with the id, name, house, etc.
  componentDidUpdate (prevState, prevProps) {
    if (prevProps.id !== this.props.selectedAlly.id) {
      this.setState({
        id: this.props.selectedAlly.id,
        name: this.props.selectedAlly.name,
        house: this.props.selectedAlly.house,
        strength: this.props.selectedAlly.strength,
        allegience: this.props.selectedAlly.allegience,
        alive: this.props.selectedAlly.alive
      })
    }
  }; // says when a new selectedAlly is on state, this state will be updated. It's how we get out our selected ally to edit

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.patchAlly(this.state)
  } // want to take the information from this local state to the gloabl application's state.

  render(){
    return(
      <div>
        <h2>– Edit an Ally –</h2>
        <form onSubmit={this.handleSubmit}>
          <h4>{this.state.name} | {this.state.alive ? "alive" : "dead"}</h4>

          <select name="allegience" value={this.state.allegience} onChange={this.handleChange}>
            <option>--Allegiance--</option>
            <option value="Cersei Lannister">Cersei Lannister</option>
            <option value="Daenerys Targaryen">Daenerys Targaryen</option>
            <option value="Jon Snow">Jon Snow</option>
            <option value="Sansa Stark">Sansa Stark</option>
          </select><br/><br/>

          <label>House: </label>
          <input name="house" value={this.state.house} onChange={this.handleChange} />

          <label>Strength: </label>
          <input name="strength" value={this.state.strength} onChange={this.handleChange}  />

          <label>Dead or Alive</label>
          <select name="alive" value={this.state.alive} onChange={this.handleChange}>
            <option>---</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
          </select>
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  };
};

// step 1 is to connect to Redux:
const mapStateToProps = (state) => ({
  selectedAlly: state.allyInfo.selectedAlly
})

// because this component needs to be able to write to state, add mapDispatchToProps. remember that it takes a function as a key with dispatch and an action as an argument, which takes in ally as its argument. need to write an 'action creater' - where? in 'actions.js' file then import into this file.
const mapDispatchToProps = (dispatch) => ({
  patchAlly: (ally) => dispatch(patchAlly(ally))
}) // so now 'editAlly' is on the props will call dispatch which will call editAlly, the action creater, with the ally variable, which will create an action, and dispatch will take the action to the reducer

export default connect(mapStateToProps, mapDispatchToProps)(EditAllyForm);

// THUNK:
// "thunks" are functions that are like callbacks and take in a function so that the function can be used later.
// separate file for thunk creators? In bigger projects, but for this one it will be in with action creators in 'actions.js'
