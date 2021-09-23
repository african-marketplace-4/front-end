import React, {useState, useEffect} from "react";

const welcomeBlank={
    name: {
        first: '', //string
        last: '', //string
    },
    login: {
        username: '', //string
        password: '' //string
        },
}

function Welcome(props){
  return(
    <div>
        <h1> hello my name is david </h1>
        {
        props.user && 
            <h1> Welcome back {props.user.name.first} </h1>
        }
    
  </div>
  )
}
export default Welcome;