import React from 'react'

function GcgpaForm() {
  return (
    <form>
        <label for='grades'>Enter grades for the courses:</label><input type= 'text'></input>
        <label for='credits'>Enter the correct credit hours for each cours:</label><input type= 'text'></input>
        
        <div className='form-buttons'>
            <button type='submit'>Calculate</button>
            <button type='submit'>Cancel</button>
        </div>
    </form>
  )
}

export default GcgpaForm