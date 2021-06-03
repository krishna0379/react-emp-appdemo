import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { EmployeeUpsert } from "./components/EmployeeUpsert";
import { EmployeeList } from "./components/EmployeeList";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route path="/create-employee">
          <EmployeeUpsert />
        </Route>

        <Route path="/list-employee">
          <EmployeeList />
        </Route>

        <Route exact path="/">
          <EmployeeList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
