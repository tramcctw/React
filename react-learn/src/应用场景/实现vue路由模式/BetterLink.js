import React from "react";
import { Link } from "react-router-dom";
import routerConfig from "./routerConfig";

export default function BetterLink(props) {
  const { to } = props;
  const path = getPath(to.pathname, routerConfig, "/");
  if (path === undefined) {
    throw new Error("error");
  }
  return <Link to={path}>{props.children}</Link>;
}

function getPath(name, routerConfig, rootPath) {
  for (let item of routerConfig) {
    let newPath = `${rootPath}${item.path}`;
    newPath = newPath.replace(/\/\//g, "/");
    if (item.name === name) {
      return newPath;
    } else {
      if (item.children) {
        return getPath(name, item.children, newPath);
      }
    }
  }
  return undefined;
}
