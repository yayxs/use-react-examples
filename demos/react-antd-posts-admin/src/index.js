import React from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/index";
import { constantRoutes } from "./routes/index";
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
