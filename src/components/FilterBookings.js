import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';


// filter by:
// - tutor (subject/specialty)
// - location (neighborhood -- still need to add neighborhood)
// - date (recent)
// - tutor (last name)
// - tutor (hires)

// Filter logic:
// * What is selected from the dropdown menu should affect the list of displayed bookings.
// * The information from this component should be sent with an action to the
// bookingReducer(?), which will update the app's state.
// * Filter method to be used in 'Bookings.js'

const FilterBookings = (props) => {
  // console.log('filterbookings', props)
  return (
    <div>
      <h4>Which subject would you like to study?</h4>
      <label>
        <select value={props.term} onChange={props.handleChange} className="filter-subject">
          <option value="All">All</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="Programming">Programming</option>
          <option value="Reading">Reading</option>
          <option value="Writing">Writing</option>
        </select>
      </label>
      <br/><br/>

      <div>
        <h4>Search by tutor last name: </h4>
        <input name="searchText" value={props.searchText} onChange={props.handleSearch} placeholder="Search by Tutor..." />
      </div>

    </div>
  )
}

export default FilterBookings;

// <Button.Group color='blue'>
//   <Dropdown text='Select by Subject' icon='filter' floating labeled button className='icon' onChange={props.handleChange}>
//     <Dropdown.Menu value="subject" >
//       <Dropdown.Header icon='tags' content='Select by Subject' />
//       <Dropdown.Divider />
//       <Dropdown.Item label={{ color: 'grey', empty: true, circular: true }} value="All" text='All' />
//       <Dropdown.Item label={{ color: 'red', empty: true, circular: true }} value="Math" text='Math' />
//       <Dropdown.Item label={{ color: 'blue', empty: true, circular: true }} value="Science" text='Science' />
//       <Dropdown.Item label={{ color: 'yellow', empty: true, circular: true }} value="Reading" text='Reading' />
//       <Dropdown.Item label={{ color: 'green', empty: true, circular: true }} value="Writing" text='Writing ' />
//       <Dropdown.Item label={{ color: 'teal', empty: true, circular: true }} value="Programming" text='Programming' />
//     </Dropdown.Menu>
//   </Dropdown>
// </Button.Group>

      //
      //
      // <strong>Sort by:  |</strong>
      // <label>
      //   <input type="radio" value="date" checked={null} onChange={null} />
      //   Date
      // </label>
      // <label>
      //   <input type="radio" value="price_per_hr" checked={null} onChange={null} />
      //   Price/hr
      // </label>
      // <label>
      //   <input type="radio" value="hires" checked={null} onChange={null} />
      //   Hires
      // </label>
      // <br/><br/>
