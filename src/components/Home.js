import React from 'react';

class Home extends React.Component {
  render() {
    console.log('mathe', 6/2*(1+2))
    return(
      <div>
        <h2>Welcome to WeLearn</h2>
        <p>You have a superpower. Whether you are an educator or a student, you can help make a difference in the world. At WeLearn, we believe that education has the power to transform and empower a society through the transfer of knowledge and ideas.</p>

        <h3>Are you a student?</h3>
        <p>Sign up and see how you can gain the skills of becoming a leader of tomorrow.</p>

        <h3>Do you have knowledge to share?</h3>
        <p>Sign up as a Tutor to make a difference in a future leader's life.</p>

        <h3>Our Mission</h3>
        <p>To facilitate the sharing of knowlede, ideas, and experiences by providing the space and resources necessary to enrich a community of educators and learners.</p>
      </div>
    );
 };
};

export default Home;
