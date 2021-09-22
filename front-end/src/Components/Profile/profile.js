import React from "react";

function Profile(props) {
    return(
    <div>
        <h1> Welcome back! </h1>
    <>
      
        <div className="profile">
            <h2> {props.user.name.first} {props.user.name.last} </h2>
            <div className="info"> Info:
                <p> username: {props.user.login.username} </p>
                <span className="email"> {props.user.email} </span>
            </div>
        </div>
    </>
    </div>
    )
  
}
export default Profile;