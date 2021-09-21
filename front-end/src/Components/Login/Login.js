import React from "react";
//import {BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

import LoginForm from './login_form';

const initialData={
  login: {
    username: '', //string
    password: '' //string
  }
}

function Login() {

  function matchSearch(){
    axios.get('')
  }

    return(
      <div className='loginPage'>
        <div className="header">
            <h1> Please login here: </h1>
        </div>
        
        <div className="form-container">
          <LoginForm 
              values={matchSearch}/> {/* i dont think i know how to do this */}
        </div>
        <div className="subtext">
          <p> If you do not have a login, create one here: </p>
          <p> <Link to="/register">Register here </Link> </p>
        </div>
        
      </div>
    )
}

export default Login;