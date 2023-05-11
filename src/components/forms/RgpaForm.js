import React, { useState } from 'react'
import axios from 'axios';
import './Form.css'


function RgpaForm() {
  const url = "http://127.0.0.1:8000/api/calc-req-grades";
  const [oldCgpa, setOldCgpa] = useState("");
  const [oldChours, setOldChours] = useState("");
  const [newCgpa, setNewCgpa] = useState("");
  const [newChours, setNewChours] = useState("");
  const [courseNum, setCourseNum] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Verify if values are lesser than 4.0 and set value to 4.0 if the inputed value is greater than 4.0
    switch (name) {
      case 'oldCgpa':
        setOldCgpa(value > 4.0 ? 4.0 : value);
        break;
      case 'oldChours':
        setOldChours(value);
        break;
      case 'newCgpa':
        setNewCgpa(value);
        break;
      case 'newChours':
        setNewChours(value);
        break;
      case 'courseNum':
        setCourseNum(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(oldCgpa, oldChours, newCgpa, newChours, courseNum);

    try {
      const response = await axios.post(url, {
        oldCgpa: parseFloat(oldCgpa),
        oldChours: parseFloat(oldChours),
        newCgpa: parseFloat(newCgpa),
        newChours: parseFloat(newChours),
        courseNum: parseFloat(courseNum)
      });

      if (response.status === 200) {
        const result = response.data;
        console.log(result);
        setResult(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setOldCgpa("");
    setOldChours("");
    setNewCgpa("");
    setNewChours("");
    setCourseNum("");
    setResult(null);
  };

  return (
    <div className='form-result'>
      <form>
        <div className='form-field'>
          <p className='title'>Required Grades to Hit A Desired CGPA in a Semester</p>
          <label>Enter previous CGPA:<input type= 'number' min={0.0} max={4.0} step={0.1} width={190} name='oldCgpa' value= {oldCgpa} placeholder='e.g. 2.56' onChange={handleChange} style={{ width: "213px" }}></input></label>
          <label>Enter previous credit hours:<input type= 'number' min={0}  name='oldChours' value= {oldChours} placeholder='e.g. 32' onChange={handleChange}></input></label>
          <label>Enter your desired CGPA:<input type= 'number' min={0.0} max={4.0} step={0.1} name='newCgpa' value= {newCgpa} placeholder='e.g. 3.00' onChange={handleChange} style={{ width: "226px" }}></input></label>
          <label>Enter current credit hours:<input type= 'number' min={0} name='newChours' value= {newChours} placeholder='e.g. 18' onChange={handleChange}></input></label>
          <label>Current number of courses:<input type= 'number' min={0} name='courseNum' value= {courseNum} placeholder='e.g. 6' onChange={handleChange}></input></label>
        </div>
          
          
        <div className='form-buttons'>
            <button type='button' onClick={handleCancel}>Cancel</button>
            <button type='submit' onClick={handleSubmit}>Calculate</button>
        </div>
      </form>

      {result && (
        <div className='result'>
          <h3>Result</h3>
          <p>{result.feedback}</p>
        </div>
      )}
    </div>
  )
}


export default RgpaForm