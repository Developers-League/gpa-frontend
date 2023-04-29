import React from 'react'
import './Form.css'


function RgpaForm() {
  return (
    <form>
      <div className='form-field'>
        <p>Required Grades to Hit A CGPA in a Semester</p>
        <label for='old-cgpa'>Enter prev CGPA:<input type= 'text' placeholder='e.g. old cgpa'></input></label>
        <label for='old-credit-hrs'>Enter prev credit hours:<input type= 'text' placeholder='e.g. old credit hours'></input></label>
        <label for='new-cgpa'>Expected GPA to hit:<input type= 'text' placeholder='e.g. expected CGPA'></input></label>
        <label for='new-credit-hrs'>Enter curr credit hours:<input type= 'text' placeholder='e.g. new credit hours'></input></label>
      </div>
        
        
      <div className='form-buttons'>
          <button type='submit'>Cancel</button>
          <button type='submit'>Calculate</button>
      </div>
    </form>
  )
}

export default RgpaForm