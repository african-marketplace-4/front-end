import React from "react";

import Profile from "../Profile/profile";

function Reviews(props) {
    
    return (
        <div className="reviews">
            {props.users.map(user => {
                return (
                
                <Profile 
                   user={user}
                   key={user.login.password}/>
                )
            })}
        </div>
    )
}
export default Reviews;