import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import qs from "query-string";

function A(props) {
  console.log(props);
  console.log("match:", props.match);
  console.log("location:", props.location);
  console.log(qs.parse(props.location.search));
  console.log(qs.parse(props.location.hash)); // 以&作为分隔符
  return (
    <div>
      <p>访问的地址：{props.location.pathname}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a" component={A} />
      </Switch>
    </Router>
  );
}

export default App;
