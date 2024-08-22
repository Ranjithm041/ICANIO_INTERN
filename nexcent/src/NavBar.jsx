import React from 'react';
import {Link} from 'react-router-dom';
import  '@mui/material'
const NavBar = () => {
  return (
      <nav >
        <ul >
            <li ><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Help">Help</Link></li>
        </ul>
      </nav>
  )
}

export default NavBar