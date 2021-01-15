import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
//   Redirect,
  Link
} from "react-router-dom";

// const Home = () => {
//   return <>home</>;
// };

class Home extends Component {
  componentDidMount() {
    console.log(window.location);
  }
  handleClick(){
      console.log(123)
    //   this.props.history.push({pathname:"/test?test" + "123"});
      
  }
  render() {
    return <div>
        <button onClick={ this.handleClick.bind(this) }  >123</button>
        <Link to="test?tenantId=12121212">link</Link>
    </div>;
  }
}

class Test extends Component {
  componentDidMount() {
    console.log(window.location);
  }
  render() {
    return <div>test</div>;
  }
}

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/test",
    exact: true,
    component: Test,
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
export default function RouteConfig() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
