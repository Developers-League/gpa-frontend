import React from 'react'
import './Features.css'

function Features() {
  return (

  <section id='support-features-container'>
    <p>Supported Features</p>

    <div className='support-feature-frames'>

      <div className='support-frame'>
        <h5>FGPA Calculator</h5>
      </div>

      <div className='support-frame'>
        <h5>GPA & CGPA Calculator</h5>
      </div>

      <div className='support-frame'>
        <h5>Grades Required To Hit A Specific CGPA</h5>
      </div> 

      <div className='support-frame'>
        <h5>Minimum and Maximum Reachable GPA In A Semester</h5>
      </div>

      {/* <div className='support-frame'>
        <h5>Lowest Attainable GPA In A Semester</h5>
      </div> */}

    </div>

  </section>

  );
}

export default Features