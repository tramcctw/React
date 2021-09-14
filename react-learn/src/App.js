import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Page1(props) {
  // console.log(props.match);
  return <h1>hello</h1>;
}

export default function () {
  return (
    <div>
      <Router>
      <Link to="/news/123">跳转</Link>
        <Route path="/news/:id" component={Page1} exact />
      </Router>
    </div>
  );
}
