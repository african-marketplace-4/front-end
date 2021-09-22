import React, { useState } from "react";
 import { Route, Link } from 'react-router-dom';

const initialLoginUsername = {
  login: {
    username: '', //string
    password: '' //string
  }
}

function Form(props) {
  const [ formVals, setFormVals ] = useState(initialLoginUsername);

  const onChange = evt => {
    const { name, value } = evt.target;
    setFormVals({ ...formVals, [name]: value})
  }
    
    // update the items in our api
    // const onChange = evt => {
    //     const name = evt.target.name;
    //     const value = evt.target.value;
    //       update( name, value );
    // }

    
    return(
        <form className="login">
          <div className="login-comp"> 
            <label className="username"> Username: 
               <input
                 onChange={onChange}
                 type="text"
                 name="username"
                 placeholder="this name will be shared with your peers"
                 value={formVals.username}
                />
            </label>
            <label> Password: 
               <input
                 onChange={onChange}
                 type="text"
                 name="password"
                 placeholder="this will remain confidential"
                 value={formVals.password}
                />
            </label>

          </div>
          <button to='/welcome_page' onClick={() => props.submitForm(<Link to="/welcome_page"/>)}> Submit </button>
        </form>
    )
}
export default Form;