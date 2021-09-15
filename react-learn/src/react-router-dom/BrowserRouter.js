import React from "react";
import Router from "../react-router/Router";
import { createBrowserHistory } from "../react-router/history";

export default function BrowserRouter({ children }) {
  const history = createBrowserHistory();

  return <Router history={history}>{children}</Router>;
}
