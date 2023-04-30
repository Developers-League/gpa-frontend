import React, {useState} from 'react'
import './Form.css'



function HLgpaForm() {
  const [details, setDetails] = useState({
    old_cred: "", new_cred: "", old_cgpa: ""

  });

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
        <p>Minimum and Maximum Attainable CGPA In A Semester</p>
        <label for='old_cgpa'>Your current CGPA: <input type='text' name='old_cgpa' placeholder='e.g. 3.0' onChange={handleChange}></input></label>
        <label for='old_cred'>Current credit hours: <input type='text' name='old_cred' placeholder='e.g. 36' onChange={handleChange}></input></label>
        <label for='new_cred'>Credit hours for this semester: <input type='text' name='new_cred' placeholder='e.g. 18' onChange={handleChange}></input></label>
      </div>
  
      <div className='form-buttons'>
          <button type='submit'>Cancel</button>
          <button type='submit' onClick={handleSubmit}>Calculate</button>
      </div>
    </form>
  )
}

export default HLgpaForm