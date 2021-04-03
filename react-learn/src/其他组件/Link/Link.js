import { withRouter } from "react-router-dom";
import React from "react";

function Link(props) {
  console.log(props);
  return (
    <a
      href={props.to}
      onClick={(e) => {
        e.preventDefault();
        props.history.push(props.to);
      }}
    >
      {props.children}
    </a>
  );
}

export default withRouter(Link);
