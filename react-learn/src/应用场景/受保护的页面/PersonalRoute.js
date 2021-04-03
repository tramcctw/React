import React from "react";
import { Redirect, Route } from "react-router-dom";
import loginObj from "./IsLogin";

export default function PersonalRoute({
  component: Component,
  render,
  children,
  ...reset
}) {
  return (
    <Route
      {...reset}
      render={() => {
        if (loginObj.isLogin === false) {
          return (
            // <Redirect to={{ pathname: "/login", search: "?path=personal" }} />
            <Redirect to={{ pathname: "/login", state: "personal" }} />
          );
        } else if (loginObj.isLogin === true) {
          return <Component />;
        }
      }}
    ></Route>
  );
}
