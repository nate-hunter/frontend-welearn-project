# WeLearn

## Models:
	- User (student)
	- Tutor
	- Booking/Appointment/Session
	- Location

## MVP:
	- a user can signup/login/logout
	- a user can search/select a tutor by subject and/or location
	- a user can book a booking **CREATE**
	- a user can view a booking **READE**
	- a user can edit a booking **UPDATE**
	- a user can delete a booking **DELETE**

## Stretch Goals:
	- a user can see a map with locations (CARTO)
	- a user can filter the map by subject and/or neighborhood
	- a user can view and utilize a calendar to book a booking (?)
	- a user can complete a payment when booking the appointment. (Stripe)
	- a user can login as a tutor
	- a user can search for meetups, workshops, education events, etc.

### Student (User) [Has-many-tutors-and-locations-through-bookings]
	- name
	- age [integer]
	- grade [integer]
	- goal
	- subject
	- learning_disability [boolean]
	- learning_disability_type

### Tutor [Has-many-users-and-locations-through-bookings] *SEEDED*
	- subjects
	- experience [integer]
	- education
	- age [integer]
	- price-per-hour [integer]
	- specialty
	(- name??)

### Location (WeWork) [Has-many-users-and-tutors-through-bookings] *SEEDED*
	- address
	- burough
	- neighborhood
	- lat
	- lon

### Booking [JOIN]
	- user_id
	- tutor_id
	- location_id
	- date
	- time

#### NOTES:
- A negative of using CARTO is when I deploy this project on Heroku the map may not be visible b/c I need to be logged in. CARTO VL may avoid this though.


Whats your app idea?
	- welearn, an app for a student (elementary to highschool) to find and book tutors at weworks in NYC.
What’s your MVP? (What can we expect by next Wednesday?)
	- a user can signup/login/logout
	- a user (student) can search for and book a session with a tutor
	- a user can view and edit its booking.
	- a user can view a map of wework locations

---------------------------------------------------------------------------------
* Objective & Scope
* Purpose
	- This project will help connect students (elementaray and highschool) and tutors in NYC
* Target Audience
* Technology Requirements / API
* Bdget
* Deployment

---------------------------------------------------------------------------------
Create A Timeline:
* Carefully establish a timeline based on the above
* Document timeline/tasks
* For cliens, always tell longer than you think

Wireframing & Mockups
* Know what the final result will look like
* Create wireframes or mockups using PS, Sketch, etc
* What componenents will go where?
* Send for approval

Coding
* Use everything above as a guide
* Setup dev environment
* Research other projects that are similar
* Set up a Git repo with branches
* Everyone has their own workflow

Communicate
* Keep in communication with the client/manager/team
* Make sure your on the same page
* Project mgmt software may be good idea
* Get feedback

Testing
* Be thorough with your testing
* Test on multiple platforms/OS/browsers
* After deployment, test more...
---------------------------------------------------------------------------------
## Style:
### Fonts:
	- Apercu Pro, sans-serif; (p, h1, )
	- Apercu Mono,monospace; (#s/dates)
	- font-families: "Apercu",Avenir,-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,"Calibri","Roboto",Arial,sans-serif
