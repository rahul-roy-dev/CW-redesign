import React from 'react';
import Logo from '../assets/cw logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
          <div className="leftside">
               <img src={Logo} />
          </div>
          <div className="rightSide">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="about"> About </Link>
            <Link to="/contact"> Contact </Link>
            </div>  
    </div>
  )
}

export default Navbar