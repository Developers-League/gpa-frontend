import React, {useState} from 'react'
import axios from 'axios'
import './Form.css'

function FgpaForm() {
  const url = "http://127.0.0.1:8000/api/calculate-fgpa";
  const [cgpa1, setCgpa1] = useState("");
  const [cgpa2, setCgpa2] = useState("");
  const [cgpa3, setCgpa3] = useState("");
  const [cgpa4, setCgpa4] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Verify if values are lesser than 4.0 and set value to 4.0 if the inputed value is greater than 4.0
    switch (name) {
      case 'cgpa1':
        setCgpa1(value > 4.0 ? 4.0 : value);
        break;
      case 'cgpa2':
        setCgpa2(value > 4.0 ? 4.0 : value);
        break;
      case 'cgpa3':
        setCgpa3(value > 4.0 ? 4.0 : value);
        break;
      case 'cgpa4':
        setCgpa4(value > 4.0 ? 4.0 : value);
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(cgpa1, cgpa2, cgpa3, cgpa4);

    try {
      const response = await axios.post(url, {
        cgpa1: parseFloat(cgpa1),
        cgpa2: parseFloat(cgpa2),
        cgpa3: parseFloat(cgpa3),
        cgpa4: parseFloat(cgpa4)
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
    setCgpa1("");
    setCgpa2("");
    setCgpa3("");
    setCgpa4("");
    setResult(null);
  };

  return (
    <div>
      <form>
        <div className='form-field'>
          <p>Please enter your CGPA for each level.</p>
          <label>Level 100: <input type='number' min={0.0} max={4.0} step={0.1} name='cgpa1' placeholder='e.g. 3.43' value={cgpa1} onChange={handleChange} style={{ width: "183px" }} /></label>
          <label>Level 200: <input type='number' min={0.0} max={4.0} step={0.1} name='cgpa2' placeholder='e.g. 2.56' value={cgpa2} onChange={handleChange} style={{ width: "183px" }} /></label>
          <label>Level 300: <input type='number' min={0.0} max={4.0} step={0.1} name='cgpa3' placeholder='e.g. 3.30' value={cgpa3} onChange={handleChange} style={{ width: "183px" }} /></label>
          <label>Level 400: <input type='number' min={0.0} max={4.0} step={0.1} name='cgpa4' placeholder='e.g. 3.15' value={cgpa4} onChange={handleChange} style={{ width: "183px" }} /></label>
        </div>

        <div className='form-buttons'>
          <button type='button' onClick={handleCancel}>Cancel</button>
          <button type='submit' onClick={handleSubmit}>Calculate</button>
        </div>
      </form>

      {result && (
        <div className='result'>
          <h3>Result</h3>
          <p>Level 100 CGPA: {result.cgpa1}</p>
          <p>Level 200 CGPA: {result.cgpa2}</p>
          <p>Level 300 CGPA: {result.cgpa3}</p>
          <p>Level 400 CGPA: {result.cgpa4}</p>
          <p>Final GPA: {result.fgpa} ({result.classification})</p>
        </div>
      )}
    </div>
  );
}

export default FgpaForm;
