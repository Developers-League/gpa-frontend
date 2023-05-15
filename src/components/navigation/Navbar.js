import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <div className='logo'>
        SELFCARE
      </div>
      <nav className='menu'>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="projectsSection">GPA CALCULATOR</a></li>
          <li><a href="#" style={{borderRight: 'solid 2px rgba(223, 173, 8, 0.699)'}}>ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar