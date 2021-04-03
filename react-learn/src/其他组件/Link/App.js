import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Link from "./Link";

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
      <Link to="/a" innerRef={u} replace style={{ marginRight: "20px" }}>
        去pageA
      </Link>
      <Link
        to={{
          pathname: "/b",
          search: '?name="twc"',
          hash: "#asd",
          state: { name: "aaa" },
        }}
      >
        去pageB
      </Link>
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
