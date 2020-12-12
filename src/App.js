import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movies from "./Movies";
import Registration from "./Registration"
import Login from "./Login"
import ForgotPassword from "./Forgot-Password"

export default function App() {
  return (
    <Router>
      <div>
        <nav class="link">
              <Link to="/">Movies</Link>|
              <Link to="/Registration">registration</Link>|
              <Link to="/Login">Login</Link>|
              <Link to="/Forgot-Password">forgot password</Link>|
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

