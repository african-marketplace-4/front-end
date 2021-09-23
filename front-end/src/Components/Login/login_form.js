import React, { useState } from "react";
 import { Route, Link } from 'react-router-dom';

const initialLoginUsername = {
  login: {
    username: '', //string
    password: '' //string
  }
}

function Form({user}) {
  const [ formVals, setFormVals ] = useState(initialLoginUsername);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    // console.log({ ...formVals, 
    //   login: { ...formVals.login, 
    //   [name]: value}})
    setFormVals({ ...formVals, 
      login:{...formVals.login, [name]: value}})
  }
    
    // update the items in our api
    // const onChange = evt => {
    //     const name = evt.target.name;
    //     const value = evt.target.value;
    //       update( name, value );
    // }

    
    return(
        <form className="login" >
          <div className="login-comp"> 
            <label className="username"> Username: 
               <input
                 onChange={onChange}
                 type="text"
                 name="username"
                 placeholder="this name will be shared with your peers"
                 value={formVals.login.username}
                />
            </label>
            <label> Password: 
               <input
                 onChange={onChange}
                 type="password"
                 name="password"
                 placeholder="this will remain confidential"
                 value={formVals.login.password}
                />
            </label>

          </div>
          <button to='/welcome_page' onClick={() => user.submitForm(<Link to="/welcome_page"/>)}> Submit </button>
        </form>
    )
}
export default Form;