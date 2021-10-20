import React from "react";
import { Link } from "react-router-dom";
import navImage from "./images/baking_smaller.png";

const Nav = () => {
  const navStyle = {
    color: "rgb(8, 171, 189)",
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <img className="" src={navImage} alt="NavLogo" />
      </Link>
      <ul className="nav-Links">
        <Link style={navStyle} to="/Home">
          <li>Home</li>
        </Link>

        <Link style={navStyle} to="/Random">
          <li>Recipes of the Day</li>
        </Link>

        <Link style={navStyle} to="/Desserts">
          <li>Eating Healthy</li>
        </Link>

        <Link style={navStyle} to="/Dinner">
          <li>Favorites</li>
        </Link>

        {/* <Link style={navStyle} to="/Shop">
          <li>Shop</li>
        </Link> */}
      </ul>
      {/* <a href=null>Logo source Logodesign.net</a> */}

      
    </nav>
  );
};

export default Nav;
