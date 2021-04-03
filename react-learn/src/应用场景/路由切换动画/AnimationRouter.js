import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function AnimationRouter(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest}>
      {({ match }) => {
        return (
          <CSSTransition
            in={match ? true : false}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Component></Component>
          </CSSTransition>
        );
      }}
    </Route>
  );
}
