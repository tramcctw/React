import React from "react";
import ctx from "./ContextRouter";

export default function withRouter(Comp) {
  function WrapperWithRouter(props) {
    return (
      <ctx.Consumer>{(value) => <Comp {...value} {...props} />}</ctx.Consumer>
    );
  }

  return WrapperWithRouter;
}
