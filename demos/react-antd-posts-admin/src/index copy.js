import React from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/index";
import { constantRoutes } from "./routes/index";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {/* <Route path="/login" component={Login}></Route> */}
        {/* <Route path="/admin/posts" component={List}></Route> */}
        <Route path="/admin" render={(props) => <App {...props} />}></Route>
        {constantRoutes.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            ></Route>
          );
        })}
        <Redirect to="/404" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
