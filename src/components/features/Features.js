import React, {useState} from 'react'
import FgpaForm from '../forms/FgpaForm';
import GcgpaForm from '../forms/GcgpaForm';
import RgpaForm from '../forms/RgpaForm';
import HLgpaForm from '../forms/HLgpaForm';
import './Features.css';
import WeightConvertDropdown from './WeightConvertDropdown';

function Features() {
  const [selectedForm, setSelectedForm] = useState('')

  // To toggle between form components
  const handleClick = (formName) => { // ConverterWidget component is not necessarily a form.
    if (selectedForm === formName) {
      setSelectedForm('');
    } else {
      setSelectedForm(formName);
    }
  };

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

      <div className='support-frame' onClick={ () => handleClick('ConverterWidget')}>
        <h5>Convert Grade Weight</h5>
      </div>
    </div>

    <div id=''>
        <WeightConvertDropdown/>
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