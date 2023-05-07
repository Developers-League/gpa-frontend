import React, {useState} from 'react'
import axios from 'axios';
import './Form.css'

function HLgpaForm() {
  const url = "http://127.0.0.1:8000/api/calc-min-max-gpa-per-sem";
  const [oldCgpa, setOldCgpa] = useState("");
  const [oldChours, setOldChours] = useState("");
  const [newChours, setNewChours] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = async (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'oldCgpa':
        setOldCgpa(value > 4.0 ? 4.0 : value);  // Verify if values are lesser than 4.0 and set value to 4.0 if the inputed value is greater than 4.0
        break;
      case 'oldChours':
        setOldChours(value);
        break;
      case 'newChours':
        setNewChours(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(oldCgpa, oldChours, newChours);

    try {
      const response = await axios.post(url, {
        oldCgpa: parseFloat(oldCgpa),
        oldChours: parseFloat(oldChours),
        newChours: parseFloat(newChours)
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
    setNewChours("");
    setResult(null);
  };

  return (
    <div>
      <form>
        <div className='form-field'>
          <p>Minimum and Maximum Attainable CGPA In A Semester</p>
          <label>Your current CGPA: <input type='number' min={0.0} max={4.0} step={0.1} name='oldCgpa' value={oldCgpa} placeholder='e.g. 3.0' onChange={handleChange} style={{ width: "193px" }}></input></label>
          <label>Current credit hours: <input type='number' min={0}  name='oldChours' value={oldChours} placeholder='e.g. 36' onChange={handleChange}></input></label>
          <label>Credit hours for this semester: <input type='number' min={0} name='newChours' value={newChours} placeholder='e.g. 18' onChange={handleChange}></input></label>
        </div>
    
        <div className='form-buttons'>
            <button type='button' onClick={handleCancel}>Cancel</button>
            <button type='submit' onClick={handleSubmit}>Calculate</button>
        </div>
      </form>

      {result && (
        <div className='result'>
          <h3>Result</h3>
          <p>With a current CGPA of {result.oldCgpa}</p>
          <p>Minimum Attainable CGPA for this semester : {result.minCgpa} ({result.classificationMinCgpa})</p>
          <p>Maximum Attainable CGPA for this semester : {result.maxCgpa} ({result.classificationMaxCgpa})</p>
        </div>
      )}
    </div>
  );
}

export default HLgpaForm