import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employee from "./components/modules/Employee";
import AddEmployee from "./components/modules/AddEmployee";
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
        <Main>
          <Dashboard />
        </Main>
      </Route>
      <Route path="/employee" exact>
        <Main>
          <Employee />
        </Main>
      </Route>
      <Route path="/add/employee" exact>
        <Main>
          <AddEmployee />
        </Main>
      </Route>
    </Switch>
  );
}

export default App;
