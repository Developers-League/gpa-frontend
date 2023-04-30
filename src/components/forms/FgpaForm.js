import React, {useState} from 'react'
import './Form.css'
import axios from 'axios'

function FgpaForm() {
  const [details, setDetails] = useState({
    cgpa1: "", cgpa2: "", cgpa3: "", cgpa4: ""

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return {...prev, [name]: value};
    })
  }

   const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(details)
    // try{
    //   const response = await axios.post(

    //   )
    // }
    // catch {
    //   pass
    // }
    

  }

  return (
    <form >
        <div className='form-field'>
          <p>Please enter your CGPA for each level.</p>
          <label for='Level 100'>Level 100: <input type= 'text' name= 'cgpa1' placeholder='e.g. 3.43' onChange={handleChange}></input></label>
          <label for='Level 200'>Level 200: <input type= 'text' name= 'cgpa2' placeholder='e.g. 2.56' onChange={handleChange}></input></label>
          <label for='Level 300'>Level 300: <input type= 'text' name= 'cgpa3' placeholder='e.g. 3.30' onChange={handleChange}></input></label>
          <label for='Level 400'>Level 400: <input type= 'text' name= 'cgpa4' placeholder='e.g. 3.15' onChange={handleChange}></input></label>
        </div>
        
        
        <div className='form-buttons'>
            <button type='submit'>Cancel</button>
            <button type='submit' onClick={handleSubmit}>Calculate</button>
        </div>
    </form>
  )
}

export default FgpaForm