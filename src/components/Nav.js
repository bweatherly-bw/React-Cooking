import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {

    const navStyle = {
        color: 'white' 
    };

  return (
      <nav>
          <h3>Logo</h3>
          <ul className="nav-Links">
              <Link style={navStyle} to='/Home' > 
              <li>Home</li>
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
      </nav>
  );
};

export default Nav;