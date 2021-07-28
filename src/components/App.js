
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import PlantsHome from './PlantsHome'
import Nav from './Nav'

const initialDisabled = false;

function App() {

  const [disabled, setDisabled] = useState(initialDisabled);

  return (

    <div className='App'>
      <Nav disabled={disabled} setDisabled={setDisabled} />
      <Switch>
        <Route path='/myplants'>
          <PlantsHome />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
