import React, {useState} from 'react'
import './Form.css'

function GcgpaForm() {
  const [details, setDetails] = useState({
    grades: "", credit: ""
  })

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
          <p>Enter your grades and their corresponding credit hours.</p>
          <label for='grades'>Grade for each course:<input type= 'text' name='grades' placeholder='e.g. A, B+, C...' onChange={handleChange}></input></label>
          <label for='credits'>Credit hours for each course:<input type='text' name='credit' placeholder='e.g. 2, 3, 3...' onChange={handleChange}></input></label>
        </div>
        
        <div className='form-buttons'>
          <button type='submit'>Cancel</button>
          <button type='submit' onClick={handleSubmit}>Calculate</button>
        </div>
    </form>
  )
}

export default GcgpaForm