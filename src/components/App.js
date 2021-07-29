import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

import Nav from "./Nav";
import Login from "./login";
import MyPlants from "./PlantsHome";
import Signup from "./SignUp";
import MyAccount from "./MyAccount";
import EditAccount from "./EditAccount";
import AddPlants from "./CreatePlantModal";
import EditPlant from "./EditPlant";

const initialDisabled = false;

function App() {
  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    <div className="App">
      <Nav disabled={disabled} setDisabled={setDisabled} />
      <Switch>
        {/* <Route path="/myplants">
          <PlantsHome />
        </Route> */}
        <Route path="/login" component={Login} />
        <Route path="/myplants" component={MyPlants} />
        <Route path="/signup" component={Signup} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/editaccount" component={EditAccount} />
        <Route path="/addplants" component={AddPlants} />
        <Route path="/editplant/:id" component={EditPlant} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
