import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./RootRouter";
import Link from "./BetterLink";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to={{ pathname: "Home" }}>首页</Link>
        <Link to={{ pathname: "News" }}>新闻页</Link>
      </nav>
      <div>
        <RootRouter></RootRouter>
      </div>
    </Router>
  );
}
