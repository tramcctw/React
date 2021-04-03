import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import routerConfig from "./routerConfig";

function User({ match }) {
  return (
    <div>
      <h1>user固定的内容</h1>
      <Link style={{ marginRight: "20px" }} to={routerConfig.user.update}>
        to userUpdate
      </Link>
      <Link to={routerConfig.user.pay.root}>to userPay</Link>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
        }}
      >
        {/* user会变的内容 */}
        <Route path={routerConfig.user.update} component={UserUpdate}></Route>
        <Route path={routerConfig.user.pay.root} component={UserPay}></Route>
        <Redirect to={routerConfig.user.update}></Redirect>
        {/* 重定向 */}
      </div>
    </div>
  );
}

function UserPay() {
  return <h1>pay</h1>;
}

function UserUpdate() {
  return <h1>updata</h1>;
}

export default function App() {
  return (
    <Router>
      <Route path={routerConfig.user.root} component={User}></Route>
    </Router>
  );
}
