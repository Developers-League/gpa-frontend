import React, { useState } from 'react'
import './Form.css'


function RgpaForm() {
  const [details, setDetails] = useState({
    old_cgpa: "",old_chours: "",new_cgpa: "",new_chours: "",course_num: ""
  })
  const [result, setState] = useState(null)

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return {...prev, [name]: value};
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details)
  }

  return (
    <form>
      <div className='form-field'>
        <p className='title'>Required Grades to Hit A Desired CGPA in a Semester</p>
        <label>Enter previous CGPA:<input type= 'number' min={0.0} max={4.0} step={0.1} width={190} name='old_cgpa' placeholder='e.g. 2.56' onChange={handleChange} style={{ width: "213px" }}></input></label>
        <label>Enter previous credit hours:<input type= 'number' min={0}  name='old_chours' placeholder='e.g. 32' onChange={handleChange}></input></label>
        <label>Enter your desired CGPA:<input type= 'number' min={0.0} max={4.0} step={0.1} name='new_cgpa' placeholder='e.g. 3.00' onChange={handleChange} style={{ width: "226px" }}></input></label>
        <label>Enter current credit hours:<input type= 'number' min={0} name='new_chours' placeholder='e.g. 18' onChange={handleChange}></input></label>
        <label>Current number of courses:<input type= 'number' min={0} name='course_num' placeholder='e.g. 6' onChange={handleChange}></input></label>
      </div>
        
        
      <div className='form-buttons'>
          <button type='submit'>Cancel</button>
          <button type='submit' onClick={handleSubmit}>Calculate</button>
      </div>
    </form>
  )
}


export default RgpaForm