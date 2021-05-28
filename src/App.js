import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./panel/Main";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/dashboard" exact>
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
