import React from 'react'

function RgpaForm() {
  return (
    <form>
        <label for='old-cgpa'>Enter old CGPA:</label><input type= 'text'></input>
        <label for='old-credit-hrs'>Enter old credit hours:</label><input type= 'text'></input>
        <label for='new-cgpa'>Enter CGPA wished for:</label><input type= 'text'></input>
        <label for='new-credit-hrs'>Enter current credit hours:</label><input type= 'text'></input>
        
        <div className='form-buttons'>
            <button type='submit'>Calculate</button>
            <button type='submit'>Cancel</button>
        </div>
    </form>
  )
}

export default RgpaForm