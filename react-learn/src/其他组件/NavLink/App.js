import React, { useRef } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import Link from "./Link";
import "./App.css";

function PageB(props) {
  console.log(props);
  return <h1>Page B</h1>;
}

function PageA() {
  return <h1>Page A</h1>;
}

export default function App() {
  const u = useRef();
  console.log(u.current);
  return (
    <Router>
      <Route path="/a" component={PageA}></Route>
      <Route path="/b" component={PageB}></Route>
      <NavLink
        activeClassName="selected"
        to="/a"
        innerRef={u}
        replace
        strict
        style={{ marginRight: "20px" }}
      >
        去pageA
      </NavLink>
      <NavLink
        activeClassName="selected"
        activeStyle={{ backgroundColor: "#008c8c" }}
        to={{
          pathname: "/b",
          search: '?name="twc"',
          hash: "#asd",
          state: { name: "aaa" },
        }}
      >
        去pageB
      </NavLink>
      <button
        onClick={() => {
          console.log(u.current);
        }}
      >
        按钮
      </button>
    </Router>
  );
}
