import React from "react";
import "../index.css";

import {NavLink} from "react-router-dom";

function Header() {
    return (
      <header className="navbar bg-primary">
        <h1>
        <i class="fa-brands fa-github"></i> Github_finder
        </h1>
        <ul>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <NavLink to={"/about"}><li>About</li></NavLink>
        </ul>
      </header>
    );
  }
  
  export default Header;
  