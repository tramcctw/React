import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Personal from "./Personal";
import PersonalRoute from "./PersonalRoute";

export default function App() {
  return (
    <Router>
      <Link to="/" style={{ marginRight: "10px" }}>
        首页
      </Link>
      <Link to="/login" style={{ marginRight: "10px" }}>
        登录页
      </Link>
      <Link to="/personal">受保护页</Link>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <PersonalRoute
          path="/personal"
          exact
          component={Personal}
        ></PersonalRoute>
      </Switch>
    </Router>
  );
}
