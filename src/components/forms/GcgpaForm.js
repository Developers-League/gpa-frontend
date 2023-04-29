import React from 'react'
import './Form.css'

function GcgpaForm() {
  return (
    <form>
        <div className='form-field'>
          <p>Enter your grades and their corresponding credit hours.</p>
          <label for='grades'>Grade for each course:<input type= 'text' placeholder='e.g. A, B+, C...'></input></label>
          <label for='credits'>Credit hours for each course:<input type= 'text' placeholder='e.g. 2, 3, 3...'></input></label>
        </div>
        
        <div className='form-buttons'>
          <button type='submit'>Cancel</button>
          <button type='submit'>Calculate</button>
        </div>
    </form>
  )
}

export default GcgpaForm