// here is for guests to register

import React, {useState, useEffect} from "react";

import RegiForm from "./register_form";
//import { Route } from 'react-router-dom';



function Register(props) {
    const [ formVals, setFormVals ] = useState([]);

    const onChange = (evt) => {
      const {name, value } = evt.target;
      setFormVals({ ...formVals, [name]: value })
    }
    const newUserSubmit = () => {
        const newUser = {
        
            name: {
                first: formVals.props.user.first.trim(), //string
                last: formVals.last.trim(),
                pronoun: formVals.pronoun.trim()
            },
            email: formVals.email.trim(),
            login: {
                username: formVals.username.trim(), //string
                password: formVals.password.trim() //string
            },
            //could also have location and other things in here
        }
    
    }
    return(
        <>
        <h1> register here </h1>
             <RegiForm 
                user={formVals}
                onChange={onChange}
                />
        </>
    )
}
export default Register;