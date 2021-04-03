import React from "react";
import * as Pages from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimationRouter from "./AnimationRouter";

// 注意加入Switch 匹配就是true其他的不匹配，所以in永远都是true

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="nav">{Pages.nav()}</div>
        <AnimationRouter
          path="/"
          exact
          component={Pages.Home}
        ></AnimationRouter>
        <AnimationRouter
          path="/news"
          exact
          component={Pages.News}
        ></AnimationRouter>
        <AnimationRouter
          path="/personal"
          exact
          component={Pages.Personal}
        ></AnimationRouter>
      </div>
    </Router>
  );
}
