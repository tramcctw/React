import React from "react";
import routerConfig from "./routerConfig";
import { Switch, Route } from "react-router-dom";

function getRouter(routers, rootPath) {
  if (!routers) {
    return null;
  }
  const res = routers.map((router, i) => {
    const { children, path, name, component: Component, ...rest } = router;
    let newPath = `${rootPath}${path}`;
    newPath = newPath.replace(/\/\//g, "/");
    return (
      <Route
        key={i}
        {...rest}
        path={newPath}
        render={(val) => {
          return <Component {...val}>{getRouter(children, newPath)}</Component>;
        }}
      ></Route>
    );
  });
  return res;
}

export default function RootRouter() {
  return <Switch>{getRouter(routerConfig, "/")}</Switch>;
}
