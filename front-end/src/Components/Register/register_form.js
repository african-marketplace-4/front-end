import React from "react";

function Form(props){
  console.log(props.user)


    return(
        <form className="register">
          <div className="register-comp"> 
            <label className="name"> First Name: 
               <input
                 type="text"
                 name="user.name.first"
                 placeholder="First Name"
                 value={props.users.name.first}
                />
            </label>
            <label className="name"> Last Name: 
               <input
                 type="text"
                 name="name.last"
                 placeholder="this name will be shared with your peers"
                 value={props.user.name.last}
                />
            </label>
            <label className="username"> Username: 
               <input
                 type="text"
                 name="username"
                 placeholder="this name will be shared with your peers"
                 value={props.user.login.username}
                />
            </label>
            <label> Password: 
               <input
                 type="text"
                 name="password"
                 placeholder="this will remain confidential"
                 value={props.user.login.password}
                />
            </label>

          </div>
        </form>
    )
}
export default Form;