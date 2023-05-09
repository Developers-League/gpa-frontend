import React, {useState} from 'react'
import axios from 'axios'
import './Form.css'


function GcgpaForm() {
  const url = "http://127.0.0.1:8000/api/calc-gpa-and-cgpa";
  const [grades, setGrades] = useState("");
  const [credits, setCredits] = useState("");
  const [result, setResult] = useState(null);

  const gradesRegex = /^[A-Z+, ]*$/; // Grades input format
  const creditsRegex = /^[\d, ]*$/;  // Grades input format

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'grades':
        setGrades(value);
        break;
      case 'credits':
        setCredits(value);
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(grades, credits);

    try {
      // To validate the format and pattern of input
      if (!gradesRegex.test(grades) || !creditsRegex.test(credits)) {
        // Validation failed, handle the error
        console.error('Invalid input');
        return;
      }

      const gradesList = grades.split(',').map((grade) => grade.trim().replace(/\s+/g, ''));  // To parse grades input and convert it into a list object
      const creditsList = credits.split(',').map((hours) => Number(hours.trim()));            // To parse credit hours input and convert it into a list object

      const response = await axios.post(url, {
        grades: gradesList,
        credit: creditsList
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
    setGrades("");
    setCredits("");
    setResult(null)
  };

  return (
    <div>
      <form>
          <div className='form-field'>
            <p>Enter your grades and their corresponding credit hours to calculate your CGPA.</p>
            <label>Grade for each course:<input type= 'text' name='grades' value={grades} placeholder='e.g. A, B+, C...' pattern="[A-F+, ]*"  title="Please enter uppercase alphabets, '+' symbol, and commas only" onChange={handleChange}></input></label>
            <label>Credit hours for each course:<input type='text' min={0} name='credits' value={credits} pattern="\d+([,\s]\d+)*" title="Please enter comma-separated numbers only" placeholder='e.g. 2, 3, 3...' onChange={handleChange}></input></label>
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

export default GcgpaForm