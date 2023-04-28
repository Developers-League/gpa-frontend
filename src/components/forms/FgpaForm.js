import React from 'react'

function FgpaForm() {
  return (
    <form>
        <label for='cgpa Year 1'>CGPA for Year 1:</label><input type= 'text'></input>
        <label for='cgpa Year 2'>CGPA for Year 2:</label><input type= 'text'></input>
        <label for='cgpa Year 3'>CGPA for Year 3:</label><input type= 'text'></input>
        <label for='cgpa Year 4'>CGPA for Year 4:</label><input type= 'text'></input>
        
        <div className='form-buttons'>
            <button type='submit'>Calculate</button>
            <button type='submit'>Cancel</button>
        </div>
    </form>
  )
}

export default FgpaForm