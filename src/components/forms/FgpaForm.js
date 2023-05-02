import React, {useState} from 'react'
import './Form.css'
import axios from 'axios'

function FgpaForm() {
  const url = "http://127.0.0.1:8000/api/calc-fgpa"
  const [details, setDetails] = useState({
    cgpa1: "", cgpa2: "", cgpa3: "", cgpa4: ""
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return {...prev, [name]: value};
    })
  }

   const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(details)
    try{
     const response = await axios.post(url, {
        cgpa1: details.cgpa1 ,
        cgpa2: details.cgpa2 , 
        cgpa3: details.cgpa3 , 
        cgpa4: details.cgpa4 
      }
      )
    }
     catch (error) {
        console.error(error);
    }
  }

  return (
    <form >
        <div className='form-field'>
          <p>Please enter your CGPA for each level.</p>
          <label for='Level 100'>Level 100: <input type= 'number' min={0.0} max={4.0} step={0.1} name= 'cgpa1' placeholder='e.g. 3.43' onChange={handleChange} style={{ width: "183px" }}></input></label>
          <label for='Level 200'>Level 200: <input type= 'number' min={0.0} max={4.0} step={0.1} name= 'cgpa2' placeholder='e.g. 2.56' onChange={handleChange} style={{ width: "183px" }}></input></label>
          <label for='Level 300'>Level 300: <input type= 'number' min={0.0} max={4.0} step={0.1} name= 'cgpa3' placeholder='e.g. 3.30' onChange={handleChange} style={{ width: "183px" }}></input></label>
          <label for='Level 400'>Level 400: <input type= 'number' min={0.0} max={4.0} step={0.1} name= 'cgpa4' placeholder='e.g. 3.15' onChange={handleChange} style={{ width: "183px" }}></input></label>
        </div>
        
        
        <div className='form-buttons'>
            <button type='submit'>Cancel</button>
            <button type='submit' onClick={handleSubmit}>Calculate</button>
        </div>
    </form>
  )
}

export default FgpaForm