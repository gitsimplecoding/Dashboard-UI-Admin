import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { adminRoutes, authRoutes } from "./routes/routes";
import Authlayout from "./layout/Authlayout";
import Adminlayout from "./layout/Adminlayout";
// Multi-layout function
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
    exact
  ></Route>
);
function App() {
  return (
    <Router>
      <Switch>
        {authRoutes.map((route, idx) => (
          <AppRoute
            key={idx}
            path={route.path}
            component={route.component}
            layout={Authlayout}
          />
        ))}
        {adminRoutes.map((route, idx) => (
          <AppRoute
            key={idx}
            path={route.path}
            component={route.component}
            layout={Adminlayout}
          />
        ))}
        <Redirect strict from="/" to="/auth/signin" />
      </Switch>
    </Router>
  );
}

export default App;
