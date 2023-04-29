import React from 'react'
import './Form.css'

function FgpaForm() {
  return (
    <form >
        <div className='form-field'>
          <p>Please enter your CGPA for each level.</p>
          <label for='cgpa Year 1'>Level 100: <input type= 'text' placeholder='e.g. 3.43'></input></label>
          <label for='cgpa Year 2'>Level 200: <input type= 'text' placeholder='e.g. 2.56'></input></label>
          <label for='cgpa Year 3'>Level 300: <input type= 'text' placeholder='e.g. 3.30'></input></label>
          <label for='cgpa Year 4'>Level 400: <input type= 'text' placeholder='e.g. 3.15'></input></label>
        </div>
        
        
        <div className='form-buttons'>
            <button type='submit'>Cancel</button>
            <button type='submit'>Calculate</button>
        </div>
    </form>
  )
}

export default FgpaForm