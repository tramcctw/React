import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function A(props) {
  console.log(props);
  return (
    <div>
      <h1>组件A状态数据：{props.history.location.state}</h1>
      <h2>组件A</h2>
      <button
        onClick={() => {
          props.history.push("/b", "hahah");
        }}
      >
        跳转组件B
      </button>
    </div>
  );
}

function B(props) {
  console.log(props.history);
  return (
    <div>
      <h1>组件B状态数据：{props.history.location.state}</h1>
      <h2>组件B</h2>
      <button
        onClick={() => {
          props.history.push("/a", "hehehhe"); //  上下文改变，组件重新渲染
        }}
      >
        跳转组件A
      </button>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>没有页面～</h2>
    </div>
  );
}

function App() {
  console.log(1111);
  return (
    <Router>
      <Route path="/b" exact component={B} />
      <Route path="/a" exact component={A}></Route>
      <Route path="/c" component={NotFound}>
        {() => {
          // 一定会展示的数据
          return <h1 style={{ color: "red" }}>hello</h1>;
        }}
      </Route>
    </Router>
  );
}

export default App;
