import React from 'react'
import { connect } from 'react-redux';
import { Button, Checkbox, Form, Grid, Select } from 'semantic-ui-react';
import { createStudentBooking } from '../actions/bookingActions'

class BookingDetails extends React.Component {
  state = {
    id: "",
    session_length: "",
    session_cost: "",
    session_goal: ""
  }

  handleChange = (e) => {
    console.log("name", e.target.name)
    console.log("value", e.target.value)
    debugger
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelect = (e, data) => {
    let session_cost = data.name === 'session_length' && parseInt(this.props.selectedTutor.price_per_hr) * parseInt(data.value)
    let bookingId = this.props.selectedBooking.id
    console.log("user",this.props.currentUser.id)
    this.setState({
      id: bookingId,
      [data.name]: data.value,
      session_cost: session_cost || this.state.session_cost,
      student_id: this.props.currentUser.id,
      available: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('yoooo',this.state)
    this.props.createStudentBooking(this.state)
  }

  render(){
    const booking = this.props.selectedBooking
    const location = this.props.selectedLocation || {}
    const tutor = this.props.selectedTutor || {}


    const lengthOptions = [
      { key: "1", text: "1 hour", value: "1"},
      { key: "2", text: "2 hour", value: "2"}
    ]

    const goalOptions = [
      { key: "grades", text: "Get better grades", value: "Get better grades"},
      { key: "exam", text: "Pass an important exam", value: "Pass an important exam"},
      { key: "sat", text: "Prepare for SAT/SSAT", value: "Prepare for SAT/SSAT"},
      { key: "subject", text: "Gain better proficiency in a subject struggling with", value: "Gain better proficiency in a subject struggling with"},
      { key: "other", text: "Other", value: "other"}
    ]

    return(
      <div>
        <hr/>
        <h1>Session Details</h1>
        <br/>
        <h2>{booking.available ? "available" : "not available"}</h2>
        <br/>
        <div>
          <p>{booking.date} || {booking.time}</p>
        </div>
        <h3>Location: {location.address}</h3>
        <h3>{tutor.specialty.toUpperCase()}</h3>

        <br/>
        <div>
          <h3>{tutor.firstname} {tutor.lastname} ({tutor.age})</h3>
          <h4>Education: {tutor.education}</h4>
          <h4>Experience: {tutor.experience} years  |  {tutor.hires} hires</h4>
          <h4>Price/hr: ${tutor.price_per_hr}</h4>
        </div>
        <br/><br/>

        <Grid centered>
          <Form onSubmit={this.handleSubmit}>
            <Form.Select name="session_length" value={this.state.session_length} label="Session Length" options={lengthOptions} placeholder="-" onChange={this.handleSelect}/>
            <Form.Select name="session_goal" value={this.state.session_goal} label="Session Goal" options={goalOptions} placeholder="-" onChange={this.handleSelect}/>

            <h4>Cost of Session: ${this.state.session_length * tutor.price_per_hr}</h4><br/>

            <Button type="submit" color="green">Book This Session</Button>
          </Form>
        </Grid>
        <br/>
        <br/>
        <p>|====================================================================================================|</p>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  selectedBooking: state.bookingInfo.selectedBooking,
  selectedLocation: state.bookingInfo.selectedBooking.location,
  selectedTutor: state.bookingInfo.selectedBooking.tutor,
  currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = dispatch => ({
  createStudentBooking: (booking) => dispatch(createStudentBooking(booking))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);


// //
// <Form.Field>
//   <label>Cost of Session: ${this.state.session_length * tutor.price_per_hr}</label>
//   <input name="session_cost" placeholder={this.state.session_length * tutor.price_per_hr} value={this.state.session_length * tutor.price_per_hr} onChange={this.handleChange} />
// </Form.Field>
