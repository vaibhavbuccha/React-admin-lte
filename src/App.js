import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employee from "./components/modules/Employee";
import AddEmployee from "./components/modules/AddEmployee";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./panel/Main";
import Department from "./components/modules/Department";
import AddDepartment from "./components/modules/AddDepartment";
import UpdateDepartment from "./components/modules/UpdateDepartment";
import Role from "./components/modules/role_module/Role";
import AddRole from "./components/modules/role_module/AddRole";
import UpdateRole from "./components/modules/role_module/UpdateRole";

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
      <Route path="/department" exact>
        <Main>
          <Department />
        </Main>
      </Route>
      <Route path="/add/employee" exact>
        <Main>
          <AddEmployee />
        </Main>
      </Route>
      <Route path="/add/department" exact>
        <Main>
          <AddDepartment />
        </Main>
      </Route>
      <Route path="/department/:id" exact>
        <Main>
          <UpdateDepartment />
        </Main>
      </Route>
      <Route path="/role" exact>
        <Main>
          <Role />
        </Main>
      </Route>
      <Route path="/add/role" exact>
        <Main>
          <AddRole />
        </Main>
      </Route>
      <Route path="/role/:id" exact>
        <Main>
          <UpdateRole />
        </Main>
      </Route>
    </Switch>
  );
}

export default App;
