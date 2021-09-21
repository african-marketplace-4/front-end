//putting this in to make sure things are going to the right place

import './Header.css';

import { Route, Link, Switch } from "react-router-dom";

import React from "react";

function Header() {

    return(
        <div className="header">
          <nav>  
            <Link to="/" > Home </Link>
            <Link to="/login" > Login </Link>
            <Link to="/register"> Register </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/reviews"> Reviews </Link>
          </nav>  
        </div>
    )
}
export default Header;