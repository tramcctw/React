import React, { useState, useMemo } from "react";

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
  const handleClick = useMemo(() => {
    // 第一次运行函数，将函数的返回值返回给handleClick，重新渲染时，txt无变化则返回之前的地址
    return () => {
      setTxt(txt + 1);
    };
  }, [txt]);
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
