import React, {useState} from 'react'
import FgpaForm from '../forms/FgpaForm';
import GcgpaForm from '../forms/GcgpaForm';
import RgpaForm from '../forms/RgpaForm';
import HLgpaForm from '../forms/HLgpaForm';
import './Features.css'

function Features() {
  const [selectedForm, setSelectedForm] = useState('')
  const [converterWidget, setConverterWidget] = useState('');

  // To toggle between form components
  const handleClick = (formName) => {
    if (selectedForm === formName) {
      setSelectedForm('');
    } else {
      setSelectedForm(formName);
    }
  };

  const handleClick1 = () => {}
  return (

  <section id='support-features-container'>
    <p>Supported Features</p>

    <div className='support-feature-frames'>
      <div className='support-frame' onClick={ () => handleClick('FgpaForm')}>
        <h5>FGPA Calculator</h5>
      </div>

      <div className='support-frame' onClick={ () => handleClick('GcgpaForm')}>
        <h5>GPA & CGPA Calculator</h5>
      </div>

      <div className='support-frame' onClick={ () => handleClick('RgpaForm')}>
        <h5>Grades Required To Hit A Desired CGPA</h5>
      </div> 

      <div className='support-frame' onClick={ () => handleClick('HLgpaForm')}>
        <h5>Minimum and Maximum Reachable GPA In A Semester</h5>
      </div>

      <div className='support-frame' onClick={ () => handleClick1()}>
        <h5>Convert Grade Weight</h5>
      </div>
    </div>

    <div className='forms-container'>
      {selectedForm === 'FgpaForm' && <FgpaForm/>}
      {selectedForm === 'GcgpaForm' && <GcgpaForm/>}
      {selectedForm === 'RgpaForm' && <RgpaForm/>}
      {selectedForm === 'HLgpaForm' && <HLgpaForm/>}
    </div>

  </section>

  );
}

export default Features