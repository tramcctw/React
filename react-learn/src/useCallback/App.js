import React, { useState, useCallback } from "react";

class Child extends React.PureComponent {
  render() {
    console.log("child render");
    return (
      <>
        <h1>{this.props.txt}</h1>
        <button onClick={this.props.change}>按钮</button>
      </>
    );
  }
}

function Parent() {
  console.log("Parent render");
  const [txt, setTxt] = useState(0);
  const [n, setN] = useState(0);
  const handleClick = useCallback(() => {
    setTxt(123);
  }, []); //txt变化则返回新的函数引用，否则使用之前的函数引用，传入[]表示没有依赖数据，即什么都不变
  return (
    <>
      <Child txt={txt} change={handleClick} />
      <input
        type="number"
        value={n}
        onChange={(e) => {
          setN(e.target.value);
        }}
      />
    </>
  );
}

export default function App() {
  return <Parent></Parent>;
}
