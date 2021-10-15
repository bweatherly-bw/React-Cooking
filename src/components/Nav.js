import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import navImage from './images/baking_smaller.png';


const Nav = () => {

    const navStyle = {
        color: 'white' 
    };

  return (
      <nav>
          <Link style={navStyle} to='/'> 
          <img className="" src={navImage} alt="NavLogo"/>
          </Link>
          <ul className="nav-Links">
              <Link style={navStyle} to='/Home' > 
              <li>Search</li>
              </Link>

              <Link style={navStyle} to='/Breakfast' > 
              <li>Breakfast</li>
              </Link>

              <Link style={navStyle} to='/Dinner' > 
              <li>Dinner</li>
              </Link>

              <Link style={navStyle} to='/Desserts' > 
              <li>Desserts</li>
              </Link>

          </ul>
          {/* <a href=null>Logo source Logodesign.net</a> */}
      </nav>
  );
};

export default Nav;