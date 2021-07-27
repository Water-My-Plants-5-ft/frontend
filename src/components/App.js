import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { reach } from 'yup'
import Home from './Home'
import SignUp from './SignUp.js'
import Login from './Login.js'
import PlantsHome from './PlantsHome'
import Modal from 'react-modal'
import Nav from './Nav'
import { render } from '@testing-library/react'

const initialDisabled = false;

function App() {

  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    
    <div className='App'>
      <Nav disabled={disabled} setDisabled={setDisabled}/>
      <Switch>
        <Route path='/sign-up'>
          <SignUp/>
        </Route>
        <Route path='/myplants'>
          <PlantsHome/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
