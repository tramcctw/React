import React from "react";
import { BrowserRouter, Route, Switch, Link } from "./react-router-dom";

function Page1(props) {
  console.log(props);
  return <h1>Page1</h1>;
}

function Page2() {
  return <h1>Page2</h1>;
}

function Change({ history }) {
  return (
    <div>
      <button onClick={() => history.push("/page1")}>去Page1</button>
      <button onClick={() => history.push("/page2")}>去Page2</button>
    </div>
  );
}

export default function () {
  return (
    <BrowserRouter>
     <ul>
       <Link to='/page1'>去Page1</Link>
     </ul>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      {/* <Route component={Change} /> */}
    </BrowserRouter>
  );
}
