import React from "react";
import { Route } from 'react-router-dom';



function Form(props){
    const { values, update } = props;
    
    //update the items in our api
    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update( name, value );
    }

    
    return(
        <form className="login">
          <div className="login-comp"> 
            <label className="username"> Username: 
               <input
                 onChange={onChange}
                 type="text"
                 name="username"
                 placeholder="this name will be shared with your peers"
                 value={values.login.username}
                />
            </label>
            <label> Password: 
               <input
                 onChange={onChange}
                 type="text"
                 name="password"
                 placeholder="this will remain confidential"
                 value={values.login.password}
                />
            </label>

          </div>
          <button onClick={() => props.submitForm(<Route path="/welcome_page"/>)}> Submit </button>
        </form>
    )
}
export default Form;