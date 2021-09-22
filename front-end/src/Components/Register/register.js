// here is for guests to register

import React from "react";

import RegistForm from "./register_form";
//import { Route } from 'react-router-dom';


function Register(props) {
    const { values, submit, rewrite } = props;

    return(
        <>
        <h1> register here </h1>
            <RegistForm 
                // values={values}
                // submit={makeNewUser}

                /> 
        </>
    )
}
export default Register;