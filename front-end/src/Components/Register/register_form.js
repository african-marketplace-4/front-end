import React, { useState } from "react";

const initialRegister ={
  name: {
    first: '', //string
    last: '', //string
    pronoun: '', //bool
  },
  email: '', //string
  login: {
    username: '', //string
    password: '' //string
  },
  //could also have location and other things in here
}

function RegiForm(props){
    const [ formVals, setFormVals ] = useState(initialRegister);
  
    const onChange = (evt) => {
      const { name, value } = evt.target;
      // console.log({ ...formVals, 
      //   login: { ...formVals.login, 
      //   [name]: value}})
      setFormVals({
           ...formVals, 
           login:{...formVals.login, [name]: value},
           /* email:{[name]: value} */[name]: value,
           name:{...formVals.name, [name]: value}}
      )
    }

    const onSubmit = (evt) =>{
      evt.preventDefault()
      console.log(onSubmit)
    }

    return(
        <form className="register" 
            onSubmit = {(evt)  =>
              props.onSubmit(evt, formVals)
            }
            >
          <div className="register-comp"> 
            <label className="email"> Email: 
               <input
                 type="text"
                 name="email"
                 placeholder="enter email"
                 value={formVals.email}
                 onChange={onChange}
                />
            </label>
            <label className="name"> First Name: 
               <input
                 type="text"
                 name="first"
                 placeholder="First Name"
                 value={formVals.name.first}
                 onChange={onChange}
                />
            </label>
            <label className="name"> Last Name: 
               <input
                 type="text"
                 name="last"
                 placeholder="this name will be shared with your peers"
                 value={formVals.name.last}
                 onChange={onChange}
                />
            </label>
            <label className="pronouns"> Preferred Pronouns: 
               <select
                 name="pronoun"
                 value={formVals.name.pronoun}
                 onChange={onChange}
                >
                  <option value=''> -- select preferred pronoun </option>
                  <option value='he_him'> he/him </option>
                  <option value='she_her'> she/her </option>
                  <option value='they_them'> they/them </option>
                  <option value='other'> other than listed above </option>
                </select>
            </label>
            <label className="username"> Username: 
               <input
                 type="text"
                 name="username"
                 placeholder="this name will be shared with your peers"
                 value={formVals.login.username}
                 onChange={onChange}
                />
            </label>
            <label> Password: 
               <input
                 type="text"
                 name="password"
                 placeholder="this will remain confidential"
                 value={formVals.login.password}
                 onChange={onChange}
                />
            </label>
            <input type='submit' value='sign up!'/>
          </div>
        </form>
    )
}
export default RegiForm;