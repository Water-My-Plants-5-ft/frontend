import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { reach } from 'yup'
import Home from './Home'
import SignUp from './SignUp.js'
import Login from './Login.js'



function App() {
  return (
    <div className='App'>
      <nav>
        <h1 className='header'>Water My Plants
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link id='sign-up' to='/sign-up'>Sign Up</Link>
          <Link id='login' to='/login'>Log In</Link>
        </div>
        </h1>
      </nav>
      <Switch>
        <Route path='/sign-up'>
          <SignUp/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
