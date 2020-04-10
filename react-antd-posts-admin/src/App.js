import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  // </React.StrictMode>,
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
