import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import "./App.css";

export default function App() {
  return (
    <Router
      getUserConfirmation={(msg, callback) => {
        callback(window.confirm(msg));
      }}
    >
      <div className="nav">
        <NavLink to="/page1">page1</NavLink>
        <NavLink to="/page2">page2</NavLink>
      </div>
      <div className="container">
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </div>
    </Router>
  );
}
