import React from 'react'
import './Features.css'

function ConverterWidget() {
  return (
    <div className='converter-widget'>
        <div className='cgpa-to-cwa'>
            <p>Convert CGPA to CWA</p>
        </div>
        <div className='cwa-to-cgpa'>
            <p>Convert CWA to CGPA</p> 
        </div>
    </div>
  )
}

export default ConverterWidget;