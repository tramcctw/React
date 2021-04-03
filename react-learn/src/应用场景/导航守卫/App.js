import React from "react";
import GuardRouter from "./GuardRouter";
import { Route, Link } from "react-router-dom";

function Page1() {
  return <h1>page1</h1>;
}

function Page2() {
  return <h1>page2</h1>;
}

export default function App() {
  return (
    <GuardRouter
      onBeforeChange={(prev, next, action, commit, unBlock) => {
        // console.log(prev, next, action, commit, unBlock);
        // console.log(`页面想要从允许跳转`);
        commit(true);
        // unBlock(); //取消阻塞，仅阻塞了一次
      }}
      onChange={(prevLocation, location, action, unListen) => {
        console.log(
          `日志 之前的路径${prevLocation.pathname}，现在的路径${location.pathname},跳转方式${action}`
        );
        unListen();
      }}
    >
      <ul>
        <li>
          <Link to="/page1">page1</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
      </ul>

      <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route>
    </GuardRouter>
  );
}
