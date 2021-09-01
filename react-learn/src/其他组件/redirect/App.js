import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function PageB(props) {
  console.log(props);
  return <h1>Page B</h1>;
}

function PageA(props) {
  console.log(props);
  return <h1>Page A</h1>;
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a/:id" component={PageA}></Route>
        <Route path="/b" component={PageB}></Route>
        {/* 其他地址没有匹配到重定向到/a */}
        <Redirect from="/c/:id" to="/a/:id" />
      </Switch>
    </Router>
  );
}
