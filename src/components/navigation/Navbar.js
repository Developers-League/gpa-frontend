import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <nav className='menu'>
        <ul>
          <li><a>Home</a></li>
          <li><a>Gpa Calculator</a></li>
          <li><a>Contact</a></li>
          <li><a>About Us</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar