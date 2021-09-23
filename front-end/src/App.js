import './App.css';
import {Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Login from './Components/Login/Login';
import Profile from './Components/Profile/profile';
import Reviews from './Components/Reviews/Reviews';
import Header from './Components/Header/Header';
import RegiForm from './Components/Register/register_form';
import Welcome from './Components/Welcome/Welcome';

const mainUser ={
  name: {
    first: 'David', //string
    last: 'Fletcher', //string
    pronoun: 'he/him', //bool
  },
  email: 'dave@dave.io', //string
  login: {
    username: 'heyimdavid', //string
    password: '1234hgft' //string
  },
  //could also have location and other things in here
}

//////// FOR REGISTER FORM ///////
// const initialRegister ={
//   name: {
//     first: '', //string
//     last: '', //string
//     pronoun: '', //dropdown
//   },
//   email: '', //string
//   login: {
//     username: '', //string
//     password: '' //string
//   },
//   //could also have location and other things in here

// }


////// FOR LOGIN ////////
// const initialLoginUsername ={
//   login: {
//     username: '', //string
//     password: '' //string
//   },
  //could also have email as an optional and other things in here




function App() {
  const [user, setUser] = useState(mainUser);
  const [users, setUsers] = useState([]); //to be an empty array of things
  


  //for the submitter in the register
  const onSubmit = (evt, registration) => {
    evt.preventDefault();
    // console.log(registration)
    setUser(registration)
  }
  
  useEffect(() => {
    async function getUsers() {
      const users = await axios.get('https://randomuser.me/api/?results=5');
      //console.log(users.data.results);
      setUsers(users.data.results)
    }
    
    getUsers();
  }, []);
 
  // useEffect(() => {
  //   async function newMembership(){
  //     const user = await axios.post('https://randomuser.me/api', newMember)
  //   }
  // })


  return (
    <div>
      <div className='header'>
        <Header />
      </div>

    <div className="App">
      <h1> Hello world </h1>
      <p> this is a new line </p>
    </div>

      <Route path="/login">
        <Login user={user}
        />
      </Route>
      <Route path="/register">
        <RegiForm 
          user={user}
          />
      </Route>
      <Route exact path="/">
        {/* <About /> */}
      </Route>
      <Route path="/profile">
        <Profile user={user}/>
      </Route>
      <Route path="/reviews">
        <Reviews users={users} />
      </Route>
      <Route path="/welcome">
        <Welcome user={user} />
      </Route>
    
    </div>
  );
}

export default App;