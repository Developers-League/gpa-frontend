import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <section id="welcome-section">
        <div className="welcome-message">
          <h1>Welcome to Daquiver's GPA SelfCare</h1>
        </div>

        <div className='description-message' >
          <p>
            This website is created for students in the University Of Ghana for GPA calculation purposes only.
            If this is your first time, kindly go through the user manual before you begin.
          </p>
        </div>
    </section>
  );
}

export default Homepage