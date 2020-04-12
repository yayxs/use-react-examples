import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { asyncRoutes } from "./routes/index";

import BasicLayout from "./layouts/BasicLayout";

export default function App() {
  return (
    <div>
      <BasicLayout>
        <Switch>
          {asyncRoutes.map((item) => {
            return (
              <Route
                exact={item.exact}
                key={item.path}
                path={item.path}
                render={(props) => {
                  return <item.component {...props} />;
                }}
              ></Route>
            );
          })}
          <Redirect to="/404" />
        </Switch>
      </BasicLayout>
    </div>
  );
}
