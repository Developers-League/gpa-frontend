import React from 'react'

function CwaToCgpa() {
    const url = "http://127.0.0.1:8000/api/convert-weight";
    const [cwa, setCwa] = useState("");
    const [result, setResult] = useState(null);
  
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      // Validate if the input is a positive number
      if (value !== '' && (!/^\d*\.?\d+$/.test(value) || Number(value) < 0)) {
        window.alert('Invalid input. Please enter a positive number.');
        return;
      }
      
      // Verify if values are lesser than 4.0 and set value to 4.0 if the inputed value is greater than 4.0
      if (name === 'cwa' ) {
          setCgpa(value > 4.0 ? 4.0 : value);
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(cwa);
  
      try {
        const response = await axios.post(url, {
          cgpa1: parseFloat(cwa),
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
      setCwa("");
      setResult(null);
    };
  
    const handleCloseResults = () => {
      setResult(null);
    }
  
    return (
      <div className='form-result'>
        <form>
          <div className='cwa-convert'>
            <label>Enter CWA: <input type='number' min={0.0} max={4.0} step={0.1} name='cwa' placeholder='e.g. 3.43' value={cwa} onChange={handleChange} style={{ width: "183px" }} /></label>
          </div>
  
          <div className='form-buttons'>
            <button type='button' onClick={handleCancel}>Cancel</button>
            <button type='submit' onClick={handleSubmit}>Convert</button>
          </div>
        </form>
  
        {result && (
          <div className='result'>
            <h3>Result</h3>
            <button type='button' onClick={handleCloseResults}>Close</button>
          </div>
        )}
      </div>
    );
  }
}

export default CwaToCgpa;